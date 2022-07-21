import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import Order from "./pages/Order/Order";
import PostForm from "./pages/PostForm/PostForm";
import Posts from "./pages/Posts/Posts";
import UserProfile from "./pages/UserProfile/UserProfile";
import "./styles.css";

// you can have a look on all the components(like <Navbar/>, <Header/>) in components folder and pages(<Home/>, <Auth/>) in pages folder

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/posts/:slug" element={<Posts />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/post" element={<PostForm />}></Route>
          <Route path="/user/:id" element={<UserProfile />}></Route>
          <Route path="/order/:id" element={<Order />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
