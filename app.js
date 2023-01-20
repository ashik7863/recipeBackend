const express = require("express");
const cors=require('cors');
const app = express();
require("./config");
const playlists = require("./regSchema");
const recipe = require("./recipeSchema");
const ingredients = require("./ingredientsSchema");
const process = require("./processSchema");
app.use(express.json());
app.use(cors());


app.post("/login", async (req, res) => {
  const { userid, password } = req.body;
  const userCheck = await playlists.findOne({ userid: userid });
  if (!userCheck) {
    return res.json({ msg: "Incorrect Username", status: false });
  }

  if (userCheck.password!==password) {
    return res.json({ msg: "Incorrect Password", status: false });
  }
  return res.json({
    status: true,
    msg: "Successfully Logged In"
  });
});
app.get("/recipe", async (req, res) => {
  let data = await recipe.find();
  res.send(data);
});
app.get("/recipe/:id", async (req, res) => {
  let recipeItem =await recipe.findOne({id:req.params.id});
  res.send(recipeItem);
});

app.get("/creator/:cid", async (req, res) => {
  let data = await playlists.findOne({id:req.params.cid});
  res.send(data);
});
app.get("/ingredient/:id", async (req, res) => {
  let data = await ingredients.findOne({recipeid:req.params.id});
  res.send(data);
});
app.get("/process/:id", async (req, res) => {
  let data = await process.findOne({recipeid:req.params.id});
  res.send(data);
});


app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(process.env.PORT || 3001);
