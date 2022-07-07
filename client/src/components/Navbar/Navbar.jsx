import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const path = location.pathname.split("/")[1];

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    setUser(null);
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);

  return (
    <div className="navbar df aic jc-sb shadow-0">
      <div className="logo">
        <Link className="link" to="/">
          <h1>Food</h1>
        </Link>
      </div>
      <div className="nav-links df">
        {!user && (
          <Link className="link mr-1" to="/auth">
            <button className="btn shadow-0">Sign In</button>
          </Link>
        )}
        {user && path != "user" && (
          <Link to={`/user/${user.result?._id}`}>
            <img
              className="user-pic df mr-1 shadow-0"
              src={
                user?.result?.imageUrl ||
                `https://avatars.dicebear.com/api/initials/${user.result?.name}")}.svg`
              }
              alt={user?.result?.name}
            />
          </Link>
        )}
        {path === "user" && (
          <Link className="link mr-1" to="/" onClick={logout}>
            <button className="btn">Logout</button>
          </Link>
        )}
        <Link className="link" to="/about">
          <button className="btn shadow-0">About us</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

// https://avatars.dicebear.com/api/initials/${user.result?.name}")}.svg
