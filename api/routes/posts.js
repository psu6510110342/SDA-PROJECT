import express from "express";
import { addPost } from "../controllers/post.js";

const rounter = express.Router();

rounter.get("/test", addPost)
export default rounter