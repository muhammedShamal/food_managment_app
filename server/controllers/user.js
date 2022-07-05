import bycrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

import User from "../models/User.js";

// login
export const signin = async (req, res) => {
  const { email, password } = req.body;
  // const key = process.env.TOKEN_KEY;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser)
      return res.status(404).json({ message: "user doesn't exists" });

    const isPasswordCorrect = await bycrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "invalid credentials" });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "FISH",
      { expiresIn: "1hr" }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "something went wrong!!!" });
  }
};

// create a new user
export const signup = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res.status(400).json({ message: "user already exists!!!" });

    if (password != confirmPassword)
      return res.status(400).json({ message: "password don't match" });

    const hashedPassword = await bycrypt.hash(password, 10);

    const result = await User.create({
      email,
      password: hashedPassword,
      name,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, "FISH", {
      expiresIn: "1hr",
    });

    res.status(200).json({ result, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong!!!" });
  }
};

// update user
export const updateUser = async (req, res) => {
  const id = req.params.id;
  const { name, email, password } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No user with id: ${id}`);

  const updatedUser = { name, email, password };

  await User.findByIdAndUpdate(id, updatedUser, { new: true });

  res.json(updatedUser);
};
