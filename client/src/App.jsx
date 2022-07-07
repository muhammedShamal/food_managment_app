import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getPosts } from "./actions/posts";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import PostForm from "./pages/PostForm/PostForm";
import UserProfile from "./pages/UserProfile/UserProfile";
import "./styles.css";

function App() {
  // const dispatch = useDispatch();
  // const posts = useSelector((state) => state.posts);
  const getPosts = async () => {
    const { data } = await axios.get("http://localhost:8000/posts");
    console.log(data);
  };
  const [user, setUser] = useState(null);

  useEffect(() => {
    getPosts();
    // dispatch(getPosts);
    // console.log(posts);
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
