import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { getPost } from "../../redux/features/postSlice";
import "./order.css";

const Order = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  // to get the id from url parameters eg: http://localhost:5000/user/82935965941993526, then the id will be = 82935965941993526
  const { id } = useParams();
  const dispatch = useDispatch();
  // data needed to create an order
  const [order, setOrder] = useState({
    userId: user.result._id,
    foodId: id,
    price: "",
    quantity: "",
    address: "",
    status: "Order Conformed",
  });
  // retrive posts from redux store
  const { posts, loading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPost(id)); // function to get a specific post from database
  }, []);
  if (loading) return <Loading />; // wait until the data is loaded
  return (
    <div className="df fd-c aic">
      <div className="order df fd-c aic jcc bd br-0 shadow-0">
        <h3>Food : {posts?.name}</h3>
        <input className="input" type="Number" placeholder="Quantity" />
        <textarea
          className="input"
          name="address"
          id=""
          cols="30"
          rows="5"
          placeholder="Address"
        ></textarea>
        <button className="btn">Place Order</button>
      </div>
    </div>
  );
};

export default Order;
