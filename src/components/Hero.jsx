import { useContext } from "react";
import Background from "../assets/images/background-anime.png";
import { DarkModeContext } from "../context";

const Hero = () => {
  // eslint-disable-next-line no-unused-vars
  const [darkMode, setDarkMode] = useContext(DarkModeContext)
  return (
    <>
      <div>
        <div className="relative">
          <img src={Background} alt="Anime Collection" />
          <div className={`bg-${darkMode ? 'white' : 'midnight'} w-full absolute top-0 left-0 right-0 bottom-0 bg-opacity-90`}>
            <div className="flex flex-col items-center justify-center h-full">
              <div className="text-magenta text-center">
                <h1 className="text-4xl font-bold py-2">
                  Welcome to Anime Collection
                </h1>
                <div className="text-base py-2">
                  the ultimate destination to explore our curated anime
                  collection.
                </div>
                <div className="text-base py-2">
                  Discover new favorites and immerse yourself in unforgettable
                  adventures.
                </div>
              </div>
              <div className="py-4">
                <input
                  className={`bg-${darkMode ? "white" : "midnight"} border rounded-full border-2 border-magenta opacity-100 p-4 w-96`}
                  placeholder="Search anime..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
