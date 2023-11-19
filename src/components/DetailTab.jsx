import React, { useContext } from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import YouTube from "react-youtube";
import { DarkModeContext } from "../context";

const DetailTab = (data) => {
  // eslint-disable-next-line no-unused-vars
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  const detail = data?.data;
  const Overview = () => {
    const opts = {
      height: "250",
      width: "400",
      playerVars: {
        autoplay: 0,
      },
    };
    return (
      <div className="flex">
        <div
          className={`w-1/2 text-base font-normal text-${
            darkMode ? "midnight" : "white"
          }`}
        >
          <div className="flex py-1">
            <div className="text-magenta pr-2">Title: </div>
            <div>
              {detail?.titles?.map((title, index) => (
                <React.Fragment key={title?.type}>
                  {title?.title}
                  {index < detail.titles.length - 1 && ", "}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="flex py-1">
            <div className="text-magenta pr-2">Genres: </div>
            {detail?.genres?.map((genre) => (
              <div key={genre?.mal_id} className="pr-2">
                {genre?.name}{" "}
              </div>
            ))}
          </div>
          <div className="flex py-1">
            <div className="text-magenta pr-2">Episodes: </div>
            <div>{detail?.episodes}</div>
          </div>
          <div className="flex py-1">
            <div className="text-magenta pr-2">Duration: </div>
            <div>{detail?.duration}</div>
          </div>
          <div className="flex py-1">
            <div className="text-magenta pr-2">Status: </div>
            <div>{detail?.status}</div>
          </div>
          <div className="flex py-1">
            <div className="text-magenta pr-2">Year: </div>
            <div>{detail?.year}</div>
          </div>
          <div className="flex py-1">
            <div className="text-magenta pr-2">Type: </div>
            <div>{detail?.type}</div>
          </div>
          <div className="flex py-1">
            <div className="text-magenta pr-2">Source: </div>
            <div>{detail?.source}</div>
          </div>
        </div>
        <div className="w-1/2 flex justify-end items-center">
          <div>
            {detail?.trailer?.youtube_id ? (
              <YouTube videoId={detail?.trailer?.youtube_id} opts={opts} />
            ) : (
              <div className="border p-32">Video not available</div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const Ratings = () => {
    return <div>hello</div>;
  };
  const location = useLocation();
  const menu = location.search.replace("/", "");
  return (
    <div>
      <div className="flex justify-center">
        <ul className={`text-lg flex text-${darkMode ? "jade" : "white"}`}>
          <Navbar
            name="Overview"
            url={location.pathname + "?overview"}
            activeMenu={menu === "?ratings" ? false : true}
          />
          <Navbar
            name="Details & Ratings"
            url={location.pathname + "?ratings"}
            activeMenu={menu === "?ratings" ? true : false}
          />
        </ul>
      </div>
      <div className="py-10">
        {menu === "?ratings" ? <Ratings /> : <Overview />}
      </div>
    </div>
  );
};

export default DetailTab;
