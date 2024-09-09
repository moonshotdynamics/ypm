'use client'
import React, { FC, useState } from "react";
import ReactPlayer from "react-player";
import { IconContext } from "react-icons";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface VideoPlayerProps {
  library: 
  {
    artist: string;
    brand: string;
    url: string;
  }[];
}

const VideoPlayer: FC<VideoPlayerProps> = ({ library }) => {

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(3);

  const goBack = () => {
    if (start !== 0) {
      setStart(start - 1);
      console.log(start);
      if (end > 3) setEnd(end - 1);
    }
  };

  const goForward = () => {
    if (end <= library.length) {
      setStart(start + 1);
      setEnd(end + 1);
    }
  };
  return (
    <div className="flex flex-col justify-center mt-12 space-y-10 lg:flex-row lg:space-y-0 lg:gap-8">
      <div className="flex flex-col justify-center align-center">
        <IconContext.Provider
          value={{ className: "text-blueberry hidden lg:block ", size: "4em" }}
        >
          <FaChevronLeft onClick={goBack} />
        </IconContext.Provider>
      </div>
      {library.splice(start, end).map((video) => (
        <div
          className="flex items-center justify-center pt-5 pb-4 position-relative"
          key={video.artist}
        >
          <ReactPlayer
            url={video.url}
            width="388px"
            height="218px"
            className="top-0 left-0 position-absolute"
            config={{
              vimeo: {
                playerOptions: {
                  controls: false,
                  responsive: true,
                },
              },
            }}
          />
        </div>
      ))}
      <div className="flex flex-col justify-center align-center">
        <IconContext.Provider
          value={{
            className: "text-orange hidden lg:block",
            size: "4em",
          }}
        >
          <FaChevronRight onClick={goForward} />
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default VideoPlayer;
