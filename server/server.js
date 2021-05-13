import express from "express";
import connectDB from "./config/db.js";
import PostRoute from "./Routes/PostRoute.js";
import CommentRoute from "./Routes/CommentRoute.js";
import cors from "cors";
import path from "path";

const app = express();
connectDB();

app.use(express.json());
app.use(cors());

app.use("/api/posts", PostRoute);
app.use("/api/comment", CommentRoute);

const __dirname = path.resolve();

const MODE = "production";
if (MODE === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

app.listen(5000, console.log("app is running on Port 5000"));

// app.get("/", (req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Origin-Headers",
//     "Origin",
//     "X-Request-With",
//     "Content-Type",
//     "Accept"
//   );
//   if (req.method === "OPTIONS") {
//     res.header("Access-Control-Allow-Origin-Methods", "GET, POST, PUT, DELETE");
//     return res.status(200).json({});
//   }
//   next();
// });
