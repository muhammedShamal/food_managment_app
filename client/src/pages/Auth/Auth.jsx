import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, register } from "../../redux/features/authSlice";

import "./auth.css";

export default function Auth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      if (password !== confirmPassword) {
        return alert("password doesnot match");
      }
      const userData = { name, email, password };
      dispatch(register({ userData, navigate }));
    } else {
      const userData = { email, password };
      dispatch(login({ userData, navigate }));
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
                name="name"
                className="input"
                placeholder="Name"
                type="text"
                onChange={handleChange}
                autoFocus
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
      <footer className="auth-footer">
        <h3>Login as admin</h3>
      </footer>
    </div>
  );
}
