import express from "express";
import connectDB from "./config/db.js";
import PostRoute from "./Routes/PostRoute.js";

const app = express();
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running....");
});
app.use("/api/posts", PostRoute);

app.listen(5000, console.log("app is running on Port 5000"));
