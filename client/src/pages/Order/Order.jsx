import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { getPost } from "../../redux/features/postSlice";
import "./order.css";

const Order = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const { id } = useParams();
  const dispatch = useDispatch();
  const [order, setOrder] = useState({
    userId: user.result._id,
    foodId: id,
    price: "",
    quantity: "",
    address: "",
    status: "Order Conformed",
  });
  const { posts, loading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPost(id));
  }, []);
  if (loading) return <Loading />;
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
