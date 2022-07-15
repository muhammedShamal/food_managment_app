import express from "express";
import { getOrders, getOrder, createOrder } from "../controllers/order.js";

const router = express.Router();

router.get("/", getOrders);
router.get("/:id", getOrder);

router.post("/", createOrder);

export default router;
