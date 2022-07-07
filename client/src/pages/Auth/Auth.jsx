import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup, signin } from "../../actions/auth";
import "./auth.css";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function Auth() {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // custome userpic
  // https://avatars.dicebear.com/api/initials/happy.svg

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signup(formData, navigate));
    } else {
      dispatch(signin(formData, navigate));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  return (
    <div className="loginpage fd-c aic df jc-sb">
      <div className="df aic jcc fd-c loginpage-container bd shadow-0 br-0">
        <h2>Have food, Have fun</h2>
        <h4>{isSignup ? "Sign Up" : "Sign In"}</h4>
        <form className="login-form aic fd-c df" onSubmit={handleSubmit}>
          {isSignup && (
            <>
              <input
                name="firstName"
                className="input"
                placeholder="First Name"
                type="text"
                onChange={handleChange}
                autoFocus
              />
              <input
                name="lastName"
                className="input"
                placeholder="Last Name"
                type="text"
                onChange={handleChange}
              />
            </>
          )}
          <input
            name="email"
            className="input"
            placeholder="Email"
            type="email"
            onChange={handleChange}
          />
          <input
            name="password"
            className="input"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
          {isSignup && (
            <input
              name="confirmPassword"
              className="input"
              type="password"
              placeholder="Confirm Password"
              onChange={handleChange}
            ></input>
          )}
          <button className="btn" type="submit">
            Sign {isSignup ? "Up" : "In"}
          </button>
        </form>
        <button className="btn" onClick={switchMode}>
          {isSignup
            ? "Already have an account? Sign In"
            : "Dont't have an account? Sign Up"}
        </button>
      </div>
      <footer className="footer">
        <h3>Login as admin</h3>
      </footer>
    </div>
  );
}
