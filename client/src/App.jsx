import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import PostForm from "./pages/PostForm/PostForm";
import UserProfile from "./pages/UserProfile/UserProfile";
import "./styles.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/post" element={<PostForm />}></Route>
          <Route path="/user/:id" element={<UserProfile />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
