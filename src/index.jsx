import { useState, useEffect } from "react";
import { FetchAnimeList } from "./configs/api/animeList";

const Home = () => {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    const getAnimeList = async () => {
      const data = await FetchAnimeList();
      console.log(data.status);
      if (data.status === "success") {
        setAnimeList(data.data.data);
      } else {
        data.status === "failed";
        console.log(data.status);
      }
    };
    getAnimeList();
  }, []);

  console.log(animeList.data)

  return (
    <>
      <div>
        {animeList.map((anime) => (
          <>
            <div key={anime.mal_id}>{anime.title}</div>
            {console.log(anime.title)}
          </>
        ))}
      </div>
    </>
  );
};

export default Home;
