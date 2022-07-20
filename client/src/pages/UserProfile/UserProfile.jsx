import { useState } from "react";
import { Link } from "react-router-dom";
import "./userProfile.css";

const UserProfile = () => {
  // retrive user from localstorage
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  return (
    <div className="user-profile df fd-c aic jc-sb">
      <div className="df bd user-profile-container br-0 shadow-0">
        <div>
          <img
            className="user-image mr-1"
            src={
              user?.result?.imageUrl ||
              `https://avatars.dicebear.com/api/initials/${user.result?.name}")}.svg`
            }
            alt=""
          />
        </div>
        <div className="df fd-c">
          <div>
            <span>Name : </span>
            <span>{user.result?.name}</span>
          </div>
          <div>
            <span>Email : </span>
            <span>{user.result?.email}</span>
          </div>
        </div>
      </div>
      <footer>
        <h3>Want to donate food ?</h3>
        <Link className="link" to="/post">
          Click here
        </Link>
      </footer>
    </div>
  );
};

export default UserProfile;
