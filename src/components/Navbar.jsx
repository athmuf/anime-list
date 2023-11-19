import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ name, url, activeMenu }) => {
  return (
    <Link to={url}>
      <li className={`px-3 pb-3 ${activeMenu && "border-b-2 border-jade"}`}>
        {name}
      </li>
    </Link>
  );
};

Navbar.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  activeMenu: PropTypes.bool,
};

export default Navbar;
