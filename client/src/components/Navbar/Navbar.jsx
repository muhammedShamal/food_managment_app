import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { setLogout, setUser } from "../../redux/features/authSlice";
import "./navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userProfile, setUserProfile] = useState(
    JSON.parse(localStorage.getItem("profile"))
  );

  const res = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(setLogout());
    dispatch(setUser(null));
    navigate("/");
  };

  return (
    <div className="navbar df aic jc-sb">
      <div className="logo">
        <Link className="link" to="/">
          <h1>Food</h1>
        </Link>
      </div>
      <div className="nav-links df aic">
        <Link className="link" to="/about">
          <button className="btn">About us</button>
        </Link>
        {userProfile || res.user ? (
          <>
            <Link className="link mr-1" to="/">
              <button onClick={onLogout} className="btn mr-1">
                Logout
              </button>
            </Link>
            <Link className="link" to={`/user/${userProfile.result?._id}`}>
              <CgProfile className="profile mr-1" />
            </Link>
          </>
        ) : (
          <Link className="link mr-1" to="/auth">
            <button className="btn">Sign In</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
