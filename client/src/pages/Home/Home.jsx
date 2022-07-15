import FoodCard from "../../components/FoodCard/FoodCard";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/features/postSlice";
import "./home.css";

const Home = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <div className="home">
      <Header />
      <div className="home-main">
        <h1>Available Foods</h1>
        <div className="home-container df jc-sb">
          {posts.length > 0 &&
            posts.map((food) => (
              <div key={food.name}>
                <FoodCard food={food} />
              </div>
            ))}
          {/* <div className="home-container">
            <h3>Free</h3>
            <div className="df home-left">
              {!posts ? (
                <></>
              ) : (
                posts
                  .filter((el) => {
                    return el.price === 0;
                  })
                  .map((food) => (
                    <div key={food.name}>
                      <FoodCard food={food} />
                    </div>
                  ))
              )}
            </div>
          </div>
          <div className="home-container df fd-c">
            <h3>Paid</h3>
            <div className="df home-right">
              {!posts ? (
                <></>
              ) : (
                posts
                  .filter((el) => {
                    return el.price > 0;
                  })
                  .map((food) => (
                    <div key={food.name}>
                      <FoodCard food={food} />
                    </div>
                  ))
              )}
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

// {
//   data.map((food) => (
//     <div key={food.name}>
//       <FoodCard food={food} />
//     </div>
//   ));
// }
