import express from "express";
import cors from "cors";
import { PORT } from "./config.js";

const app = express();

app.use(express.json());
app.use(cors());

const data = [
  { id: 1, name: "John Doe", email: "johndoe@example.com" },
  { id: 2, name: "Jane Doe", email: "janedoe@example.com" },
  { id: 3, name: "Peter Jones", email: "peterjones@example.com" },
];

app.get("/", (req, res) => {
  const goodDay = { greet: "Goodmorning" };
  res.json(goodDay);
});

app.get("/data", (req, res) => {
  res.json(data);
});

app.post("/data", (req, res) => {
  const { name, email } = req.body;

  data.push({ id: data.length + 1, name, email });

  res.status(201).json({ message: "Data added successfully" });
});

app.listen(PORT, () => {
  console.log(`Successfully connected to Port ${PORT}`);
});
