import Orders from "../models/Order.js";

export const getOrders = async (req, res) => {
  try {
    const orders = await Orders.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const createOrder = async (req, res) => {
  const newOrder = new Orders(req.body);
  try {
    await newOrder.save();
    res.status(200).json(newOrder);
  } catch (error) {
    res.status(409).json(error);
  }
};

export const getOrder = async (req, res) => {
  try {
    const order = await Orders.findById(req.params.id);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json(error);
  }
};
