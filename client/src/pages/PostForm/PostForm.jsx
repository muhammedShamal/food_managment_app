import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createPost } from "../../redux/features/postSlice";
import "./postForm.css";

const PostForm = () => {
  const navigate = useNavigate();
  // retrive user from localstorage
  const user = JSON.parse(localStorage.getItem("profile"));

  // data needed for creating a post
  const [post, setPost] = useState({
    userId: user.result._id,
    name: "",
    price: 0,
    quantity: 0,
    location: "",
    district: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(createPost({ post, navigate, toast })); // function to create a post with data of the post will create a post in database and navigate  the page to homepage
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="post-form">
      <div className="form-container df fd-c aic jcc">
        <h1 className="mb-1">Please share your food here</h1>
        <form onSubmit={handleSubmit} className="df fd-c aic bd br-0">
          <input
            onChange={(e) => setPost({ ...post, name: e.target.value })}
            className="input"
            type="text"
            placeholder="Food Name"
          />
          <input
            onChange={(e) =>
              setPost({ ...post, quantity: parseInt(e.target.value) })
            }
            className="input"
            type="text"
            placeholder="Quantity in Kg"
          />
          <label>District</label>
          <select
            name="districts"
            onChange={(e) => setPost({ ...post, district: e.target.value })}
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
          <input
            onChange={(e) =>
              setPost({ ...post, price: parseInt(e.target.value) })
            }
            className="input"
            type="text"
            placeholder="Price in Rs"
          />
          <button onClick={handleSubmit} type="submit" className="btn">
            Share
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
