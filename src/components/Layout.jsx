import { useContext } from "react";
import PropTypes from "prop-types";
import { DarkModeContext } from "../context";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return (
    <>
      <div className={`bg-${darkMode ? "white" : "midnight"}`}>{children}</div>
      <Header></Header>
      <Footer></Footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
