import express from "express";
import connectDB from "./config/db.js";
import PostRoute from "./Routes/PostRoute.js";
import CommentRoute from "./Routes/CommentRoute.js";
import path from "path";

const app = express();
connectDB();

app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("API is running....");
// });
app.use("/api/posts", PostRoute);
app.use("/api/comment", CommentRoute);

const __dirname = path.resolve();

const MODE = "production";
if (MODE === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
}

app.listen(5000, console.log("app is running on Port 5000"));
