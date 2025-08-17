import { Link } from "react-router-dom";
import "../Styles/NavBar.css"; // import the css file

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        Skill <span className="highlight">Sphere</span>
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/search">Search</Link>
      </div>
    </nav>
  );
};

export default NavBar;
