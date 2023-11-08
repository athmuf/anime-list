import { useState, useEffect } from "react";
import { FetchAnimeList } from "./configs/api/animeList";

const Home = () => {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    const getAnimeList = async () => {
      const data = await FetchAnimeList();
      console.log(data.status);
      if (data.status === "success") {
        setAnimeList(data.data);
      } else {
        data.status === "failed";
        console.log(data.status);
      }
    };
    getAnimeList();
  }, [animeList]);

  console.log(animeList)

  return (
    <>
      <div>
        {animeList?.data.map((anime) => (
          <div key={anime.mal_id}>
            {console.log(anime.mal_id)}
            <p>{anime.title}test</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
