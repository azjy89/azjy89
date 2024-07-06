import { IconButton } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import React from "react";

const CarouselCard = () => {
  return (
    <div className="flex flex-col flex-grow h-screen">
      <article
        className="grid h-full"
        style={{
          gridTemplateColumns: "5fr 3fr",
          gridTemplateRows: "5fr 3fr",
        }}
      >
        <div className="border border-gray-800 h-full">
          <a href="https://cdn.motor1.com/images/mgl/zxxMzK/s1/2023-porsche-911-gt3-rs.webp">
            <img
              src="https://cdn.motor1.com/images/mgl/zxxMzK/s1/2023-porsche-911-gt3-rs.webp"
              className="h-full w-full"
            />
          </a>
        </div>
        <div className="border border-gray-800 h-full flex flex-col justify-end pl-6 pb-6 pr-6 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </div>
        <div className="border border-gray-800 h-full flex">
          <div className="text-6xl font-bold flex justify-start pl-6 items-center break-words basis-[80%]">
            BIG IMPRESSIVE TITLE AND ITS LONG AS WELL
          </div>
        </div>
        <div className="border border-gray-800 h-full flex">
          <div className="border border-gray-800 h-full flex basis-[50%] justify-center">
            <IconButton>
              <NavigateBeforeIcon
                sx={{ color: "white", height: "100%", width: "100%" }}
              ></NavigateBeforeIcon>
            </IconButton>
          </div>
          <div className="border border-gray-800 h-full flex basis-[50%] justify-center">
            <IconButton>
              <NavigateNextIcon
                sx={{ color: "white", height: "100%", width: "100%" }}
              ></NavigateNextIcon>
            </IconButton>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CarouselCard;
