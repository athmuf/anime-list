import { useContext } from "react";
import { useLocation } from "react-router-dom";
import ToggleButton from "./ToggleButton";
import { DarkModeContext } from "../context";
import Navbar from "./Navbar";

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  const location = useLocation();
  const menu = location.pathname.replace("/", "");

  return (
    <>
      <div className="flex w-full py-3 mt-8 justify-between absolute top-0">
        <div className={`flex px-8 text-${darkMode ? "jade" : "white"}`}>
          <div className="text-xl font-bold px-2 mr-10">Anime Collection</div>
          <ul className="text-lg flex">
            <Navbar
              name="Home"
              url="./"
              activeMenu={menu === "" ? true : false}
            />
            <Navbar
              name="My Collection"
              url="/my-collection"
              activeMenu={menu === "my-collection" ? true : false}
            />
          </ul>
        </div>
        <div className="px-8">
          <ToggleButton></ToggleButton>
        </div>
      </div>
    </>
  );
};

export default Header;
