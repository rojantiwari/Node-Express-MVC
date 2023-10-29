import { app } from "./app";
import { connectDB } from "./data/database.js";


connectDB();


app.listen(4000, () => {
    console.log("Server is working");
  });
  