import "./foodCard.css";

const FoodCard = ({ food }) => {
  return (
    <div className="food-card df fd-c shadow-0 br-0 bd">
      <span>Food Name : {food.name}</span>
      <span>Location : {food.location}</span>
      <span>Quantity : {food.quantity}</span>
      {food.price === 0 ? (
        <span>Price : Free</span>
      ) : (
        <span>Price : {food.price}</span>
      )}
    </div>
  );
};

export default FoodCard;
