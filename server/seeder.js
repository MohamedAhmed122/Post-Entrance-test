import mongoose from "mongoose";

import posts from "./data/data.js";

import Post from "./models/PostModel.js";

import connectDB from "./config/db.js";


connectDB();

const importDataToDb = async () => {
  try {
    await Post.deleteMany();

    const samplePosts = posts.map((post) => {
      return { ...post };
    });
    await Post.insertMany(samplePosts);

    console.log(`Data imported To db`);
    process.exit();
  } catch (error) {
    console.log(
      `Error is coming from Importing the data to the db ${error.message}`
    );
    process.exit(1);
  }
};

const destroyDataFromDb = async () => {
  try {
    await Post.deleteMany();

    console.log("Data destroy from db");
    process.exit();
  } catch (error) {
    console.log(
      `Error is coming from Destroing the data to the db ${error.message}`
    );
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyDataFromDb();
} else {
  importDataToDb();
}
