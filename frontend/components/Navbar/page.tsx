import React from "react";

import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";

const Navbar = () => {
  return (
    <nav className="flex flex-row w-full">
      <div className="pt-9 pr-8 pb-10 pl-3 flex gap-6 border border-gray-800 basis-[17%]">
        <a href="https://www.instagram.com/andrew.zhh/">
          <InstagramIcon
            sx={{ color: "white", height: "30px", width: "30px" }}
          ></InstagramIcon>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100089730375566">
          <FacebookIcon
            sx={{ color: "white", height: "30px", width: "30px" }}
          ></FacebookIcon>
        </a>
        <a href="https://www.linkedin.com/in/andrew-zhang-94b2a8292/">
          <LinkedInIcon
            sx={{ color: "white", height: "30px", width: "30px" }}
          ></LinkedInIcon>
        </a>
        <a href="https://github.com/azjy89">
          <GitHubIcon
            sx={{ color: "white", height: "30px", width: "30px" }}
          ></GitHubIcon>
        </a>
      </div>
      <div
        className="pt-10 pr-8 pb-10 flex justify-center content-center border border-gray-800 basis-[33%]"
        style={{ gap: "9rem" }}
      >
        <a href="">ABOUT ME</a>
        <a href="">MY WORK</a>
      </div>
      <div className="pt-10 pr-8 pb-10 flex justify-center content-center gap-1 border border-gray-800 basis-[33%]">
        SPOTIFY
      </div>
      <div className="pt-10 pr-8 pb-10 flex justify-center content-center gap-1 border border-gray-800 basis-[17%]">
        <a href="">CONTACT ME</a>
      </div>
    </nav>
  );
};

export default Navbar;
