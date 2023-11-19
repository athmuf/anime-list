import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { FetchAnimeDetail } from "../configs/api/animeDetail";

const DetailAnime = () => {
  const { id } = useParams();
  const [animeData, setAnimeData] = useState();

  useEffect(() => {
    const getAnimeDetail = async () => {
      const data = await FetchAnimeDetail(id);
      if (data.status === "success") {
        setAnimeData(data.data);
        console.log(data.status);
      } else if (data.status === "failed") {
        data.status === "failed";
        console.log(data.status);
      }
    };
    getAnimeDetail();
  }, [id]);

  console.log(animeData);
  return (
    <>
      <Layout>
        <div className="px-48">
          <img src="" alt="" />
        </div>
      </Layout>
    </>
  );
};

export default DetailAnime;
