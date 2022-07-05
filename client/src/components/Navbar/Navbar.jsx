import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar df aic jc-sb shadow-0">
      <div className="logo">
        <Link className="link" to="/">
          <h1>Food</h1>
        </Link>
      </div>
      <div className="nav-links df">
        <Link className="link mr-1" to="/auth">
          <button className="btn shadow-0">Sign in</button>
        </Link>
        <Link className="link" to="/about">
          <button className="btn shadow-0">About us</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
