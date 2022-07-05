import "./home.css";
import data from "../../constants/data";
import FoodCard from "../../components/FoodCard/FoodCard";

const Home = () => {
  const arr = data.filter((el) => {
    return el.price == 0;
  });
  console.log(arr);
  return (
    <div className="home">
      <h1>Available Foods</h1>
      <div className="df">
        <div className="home-container">
          <h3>Free</h3>
          <div className="df home-left">
            {data
              .filter((el) => {
                return el.price === 0;
              })
              .map((food) => (
                <div key={food.name}>
                  <FoodCard food={food} />
                </div>
              ))}
          </div>
        </div>
        <div className="home-container df fd-c">
          <h3>Paid</h3>
          <div className="df home-right">
            {data
              .filter((el) => {
                return el.price > 0;
              })
              .map((food) => (
                <div key={food.name}>
                  <FoodCard food={food} />
                </div>
              ))}
          </div>
        </div>
      </div>
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
