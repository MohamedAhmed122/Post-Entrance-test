const MONGO_URI =
  "mongodb+srv://SmartDev123:SmartDev123@cluster0.in0bq.mongodb.net/PostTest?retryWrites=true&w=majority";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log(`mongodb connected on ${connection.connection.host}`);
  } catch (error) {
    console.log(`Error is comming from mongo connection ${error.message}`);
    process.exit(1);
  }
};
export default connectDB;
