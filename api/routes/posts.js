import express from "express";

const rounter = express.Router();

rounter.get("/test", (req,res)=>{
  res.json("Connected!")
})

export default rounter