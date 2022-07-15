import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../redux/features/postSlice";
import "./postForm.css";

const PostForm = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("profile"));
  console.log(user.result._id);

  const [post, setPost] = useState({
    userId: user.result._id,
    name: "",
    price: 0,
    quantity: 0,
    location: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(createPost({ post, navigate }));
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
            placeholder="Quantity"
          />
          <input
            onChange={(e) => setPost({ ...post, location: e.target.value })}
            className="input"
            type="text"
            placeholder="Location"
          />
          <input
            onChange={(e) =>
              setPost({ ...post, price: parseInt(e.target.value) })
            }
            className="input"
            type="text"
            placeholder="Price"
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
