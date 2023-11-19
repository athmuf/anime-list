import PropTypes from "prop-types";
import { useContext, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../context";

const NextArrow = (props) => {
  const { className, onClick } = props;
  return(
    <div onClick={onClick}>next arrow</div>
  )
}

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return(
    <div onClick={onClick}>prev arrow</div>
  )
}

const CarouselMulti = ({ item }) => {
  const [isHovered, setIsHovered] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  const handleMouseEnter = (malId) => {
    setIsHovered(malId);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    adaptiveHeight: false,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
  };

  return (
    <div className="w-full py-10">
      <div className="px-3">
        <h1 className="text-2xl py-2 font-semibold text-magenta">Anime List</h1>
      <Slider {...settings}>
        {item.map((anime) => (
          <div key={anime.mal_id}>
            <div className="mx-1">
              <Link
                to={`/detail/${anime.mal_id}`}
                onMouseEnter={() => handleMouseEnter(anime.mal_id)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="relative">
                  <img
                    src={anime?.images?.webp?.image_url}
                    alt={anime.title}
                    className="h-80 object-cover w-full "
                  />
                  {isHovered === anime.mal_id && (
                    <div
                      className={`${
                        darkMode ? "light" : "dark"
                      }-linear-gradient w-full absolute top-0 left-0 right-0 bottom-0 bg-opacity-80 flex items-end`}
                    >
                      <div className="p-4">
                        <div className="text-base text-magenta font-semibold">
                          {anime.title}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

CarouselMulti.propTypes = {
  item: PropTypes.node.isRequired,
};

export default CarouselMulti;
