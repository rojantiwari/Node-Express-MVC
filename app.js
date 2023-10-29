import express from "express";
import userRoutes from "./routes/user.js";
import { connectDB } from "./data/database.js";
import { config } from "dotenv";

export const app = express();

//giving path
config({
  path: "./data/config.env",
});

connectDB();
// console.log(process.env.PORT);
//using middlerware
app.use(express.json());
app.use(userRoutes);

app.get("/", (req, res) => {
  res.send("Nice");
});

app.listen(process.env.PORT, () => {
  // console.log(object);
  console.log("Server is working");
});
