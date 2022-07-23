import { Link } from "react-router-dom";
import "./foodCard.css";

const FoodCard = ({ food }) => {
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <div className="food-card df fd-c shadow-0 br-0">
      <span>Food Name : {food.name}</span>
      <span>Location : {food.location}</span>
      <span>Quantity : {food.quantity}</span>
      {food.price === 0 ? (
        <span>Price : Free</span>
      ) : (
        <span>Price : {food.price}</span>
      )}
      <Link to={user ? `/order/${food._id}` : `/auth`}>
        <button className="btn">Place Order</button>
      </Link>
    </div>
  );
};

export default FoodCard;
