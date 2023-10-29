import express from "express";
// import { User } from "../models/user.js";
import { getAllUsers, postNewUser} from "../controller/user.js";

const router = express.Router();

router.get("/user/all", getAllUsers );

  router.post("/user/register", postNewUser );

export default router;