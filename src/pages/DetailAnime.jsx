import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import DetailTab from "../components/DetailTab";
import { FetchAnimeDetail } from "../configs/api/animeDetail";
import { scoreColor } from "../helper/score";
import Plus from "../assets/icons/plus-solid.svg";
import Share from "../assets/icons/share-node.svg"
import { DarkModeContext } from "../context";

const DetailAnime = () => {
  const { id } = useParams();
  const [animeData, setAnimeData] = useState();
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  useEffect(() => {
    const getAnimeDetail = async () => {
      const data = await FetchAnimeDetail(id);
      if (data.status === "success") {
        setAnimeData(data.data.data);
        console.log(data.status);
      } else if (data.status === "failed") {
        data.status === "failed";
        console.log(data.status);
      }
    };
    getAnimeDetail();
  }, [id]);
  // console.log(animeData)
  return (
    <>
      <Layout>
        <div className="pt-36 px-40">
          <div className="flex justify-between items-center py-10">
            <div className="w-2/3">
              <h1
                className={`text-${
                  darkMode ? "midnight" : "white"
                } text-5xl font-bold pb-2`}
              >
                {animeData?.title}
              </h1>
              <div className="h-4 w-12 rounded bg-magenta"></div>
              <div
                className={`flex text-${
                  darkMode ? "midnight" : "white"
                } py-2 font-normal text-lg`}
              >
                <div className="pr-3">{scoreColor(animeData?.score)}</div>
                <div className="pr-3">{animeData?.year}</div>
                <div className="px-1 border border-gray-700 mr-2">
                  {animeData?.rating}
                </div>
                <div>{animeData?.episodes} episodes</div>
              </div>
              <div
                className={`text-${
                  darkMode ? "midnight" : "white"
                } text-base py-2`}
              >
                {animeData?.synopsis}
              </div>
              <div className="flex">
                <div className="bg-magenta w-56 p-2 text-white items-center justify-center rounded flex mt-4 cursor-pointer mr-2">
                  <img src={Plus} alt="+" className="w-4 mr-3" />
                  <div className="text-base">MY COLLECTION</div>
                </div>
                <div className="border border-magenta w-12 p-2 text-white items-center justify-center rounded flex mt-4 cursor-pointer">
                  <img src={Share} alt="Share" className="w-4" />
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={animeData?.images?.webp?.large_image_url}
                alt={animeData?.title}
                className="h-128 object-cover w-full"
              />
              <div
                className={`w-full bg-black absolute top-0 left-0 right-0 bottom-0 ${
                  darkMode ? "light" : "dark"
                }-linear-gradient-right bg-opacity-0 flex items-end`}
              ></div>
            </div>
          </div>
          <DetailTab data={animeData} />
        </div>
      </Layout>
    </>
  );
};

export default DetailAnime;
