import FoodCard from "../../components/FoodCard/FoodCard";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/features/postSlice";
import "./home.css";
import Services from "../../components/Services/Services";

const Home = () => {
  const dispatch = useDispatch();

  // retriving post from redux store
  const { posts, loading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts()); // getPost function sends a request to our backend and it fetches the details of posts and sends the result as an object
    // example of object in javascript { name: 'Biriyani', price: '100', location: 'Wayanad' }
  }, []);
  return (
    <div className="home">
      <Header />
      <Services />
      <div className="home-main">
        <h1>Available Foods</h1>
        <div className="home-container df jc-sb">
          {posts.length > 0 &&
            posts.map((food) => (
              <div key={food.name}>
                <FoodCard food={food} />
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
