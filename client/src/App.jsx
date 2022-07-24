import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const user = JSON.parse(localStorage.getItem("profile"));

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
          {user ? (
            <Route path="/user/:id" element={<UserProfile />}></Route>
          ) : (
            <Route path="/auth" element={<Auth />}></Route>
          )}

          {user ? (
            <Route path="/order/:id" element={<Order />}></Route>
          ) : (
            <Route path="/auth" element={<Auth />}></Route>
          )}
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Router>
    </div>
  );
}

export default App;
