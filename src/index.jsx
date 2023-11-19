import { useEffect, useState } from "react";
import { FetchAnimeList } from "./configs/api/animeList";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import CarouselMulti from "./components/CarouselMulti";

const Home = () => {
  const [animeList, setAnimeList] = useState([]);
  useEffect(() => {
    const getAnimeList = async () => {
      const data = await FetchAnimeList();
      if (data.status === "success") {
        setAnimeList(data.data.data);
      } else {
        data.status === "failed";
        console.log(data.status);
      }
    };
    getAnimeList();
  }, []);

  return (
    <Layout>
      <Hero></Hero>
      <CarouselMulti item={animeList}/>
    </Layout>
  );
};

export default Home;
