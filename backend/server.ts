import express, { Request, Response } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3001;

const {
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_REDIRECT_URI,
} = process.env;

app.get('/login', (req: Request, res: Response) => {
  const params = new URLSearchParams({
    response_type: 'code',
    client_id: SPOTIFY_CLIENT_ID as string,
    scope: 'user-read-currently-playing',
    redirect_uri: SPOTIFY_REDIRECT_URI as string,
  });

  res.redirect(`https://accounts.spotify.com/authorize?${params.toString()}`);
});

app.get('/callback', async (req: Request, res: Response) => {
  const code = req.query.code || null;

  const params = new URLSearchParams({
    code: code as string,
    redirect_uri: SPOTIFY_REDIRECT_URI as string,
    grant_type: 'authorization_code',
  });

  const headers = {
    Authorization: `Basic ${Buffer.from(
      `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
    ).toString('base64')}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      params.toString(),
      { headers }
    );

    const { access_token } = response.data;

    res.redirect(`/currently-playing?access_token=${access_token}`);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      res.send(error.response?.data || error.message);
    } else if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send('An unknown error occurred.');
    }
  }
});

app.get('/currently-playing', async (req: Request, res: Response) => {
  const accessToken = req.query.access_token as string;

  try {
    const response = await axios.get(
      'https://api.spotify.com/v1/me/player/currently-playing',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (response.data) {
      res.send(response.data);
    } else {
      res.send('No track is currently playing.');
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      res.send(error.response?.data || error.message);
    } else if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send('An unknown error occurred.');
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});