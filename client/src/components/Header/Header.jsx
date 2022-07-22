import { Link } from "react-router-dom";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import foodImg from "../../assets/notwaste.png";
import "./header.css";

const Header = () => {
  const [district, setDistrict] = useState("kasargod");
  return (
    <header className="header df aic jcc">
      <div className="header-bg-img"></div>
      <div className="header-left df aic fd-c jcc">
        <h1>
          There is food for everyone on this planet,
          <br /> but not everyone eats.
        </h1>
        <div className="br-0 shadow-0 df">
          <form className="header-form df aic">
            <select
              style={{
                marginBottom: 0,
                height: "50px",
                fontSize: "1rem",
                width: "78%",
              }}
              name="districts"
              onChange={(e) => setDistrict(e.target.value.toLowerCase())}
            >
              <option value="Kasargod">Kasargod</option>
              <option value="Kannur">Kannur</option>
              <option value="Kozhikode">Kozhikode</option>
              <option value="Wayanad">Wayanad</option>
              <option value="Malappuram">Malappuram</option>
              <option value="Palakkad">Palakkad</option>
              <option value="Thrissur">Thrissur</option>
              <option value="Ernakulam">Ernakulam</option>
              <option value="Alappuzha">Alappuzha</option>
              <option value="Kottayam">Kottayam</option>
              <option value="Idukki">Idukki</option>
              <option value="Pathanamthitta">Pathanamthitta</option>
              <option value="Kollam">Kollam</option>
              <option value="Trivandrum">Trivandrum</option>
            </select>
            <Link className="link" to={`/posts/${district}`}>
              <button className="header-btn df aic jc-sb br-0 shadow-0">
                Find Food
                <BsArrowRight />
              </button>
            </Link>
          </form>
        </div>
      </div>
      <div className="header-right df aic jcc">
        <img className="header-bg" src={foodImg} alt="" />
      </div>
    </header>
  );
};

export default Header;
