import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../components/Loading/Loading";
import { createOrder } from "../../redux/features/orderSlice";
import { getPost, updatedPost } from "../../redux/features/postSlice";
import "./order.css";

const Order = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  // to get the id from url parameters eg: http://localhost:5000/user/82935965941993526, then the id will be = 82935965941993526
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // data needed to create an order
  const [order, setOrder] = useState({
    userId: user?.result?._id,
    foodId: id,
    price: 0,
    quantity: 0,
    address: "",
    status: "Order Conformed",
  });
  console.log(id);

  // retrive posts from redux store
  const { posts, loading } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getPost(id)); // function to get a specific post from database
  }, [dispatch]);
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = () => {
    if (order.quantity > posts.quantity) {
      toast.warn("insufficient quantity", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      dispatch(updatedPost({ id, quantity }));
      dispatch(createOrder({ order, navigate, toast }));
    }
  };

  if (loading) return <Loading />; // wait until the data is loaded
  return (
    <div className="df fd-c aic">
      <div className="order df fd-c aic jcc bd br-0 shadow-0">
        <h3>Food : {posts?.name}</h3>
        <input
          className="input"
          type="Number"
          placeholder={`Quantity Max : ${posts?.quantity} Kg`}
          onChange={(e) => {
            setOrder({ ...order, quantity: parseInt(e.target.value) });
            setQuantity(posts?.quantity - parseInt(e.target.value));
          }}
        />
        <span className="mb-1">
          Price : Rs.
          {
            (order.price =
              (posts?.price * order.quantity) / posts?.quantity || 0)
          }
        </span>
        <textarea
          className="input"
          name="address"
          id=""
          cols="30"
          rows="5"
          placeholder="Address"
          onChange={(e) => setOrder({ ...order, address: e.target.value })}
        ></textarea>
        <button onClick={handleSubmit} className="btn">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Order;
