import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostOfDistrict, getPosts } from "../../redux/features/postSlice";
import FoodCard from "../../components/FoodCard/FoodCard";
import "./posts.css";
import { useParams } from "react-router-dom";

const Posts = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();

  // retriving post from redux store
  const { posts, loading, districtPosts } = useSelector((state) => state.posts);
  const district = slug.charAt(0).toUpperCase() + slug.slice(1);
  useEffect(() => {
    dispatch(getPosts()); // getPost function sends a request to our backend and it fetches the details of posts and sends the result as an object
    // example of object in javascript { name: 'Biriyani', price: '100', location: 'Wayanad' }
    dispatch(getPostOfDistrict({ district }));
  }, []);
  console.log(districtPosts);
  return (
    <div>
      <div className="posts-main">
        <h1>Available Foods</h1>
        <div className="posts-container df">
          {posts.length > 0 &&
            posts
              .filter((item) => item.district.toLowerCase() === slug)
              .map((food) => (
                <div key={food._id}>
                  <FoodCard food={food} />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
