const { User, validate } = require("./model"); //importing necessary modules
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/api/invited/users/count", async (req, res) => {
  //defining api
  const count = await User.countDocuments({ isInvited: true });
  res.send(JSON.stringify({ count }));
});

router.get("/api/invited/users/invitees/:id", async (req, res) => {
  const user = await User.find({ invitedBy: req.query.id });
  res.send(user);
});

router.post("/", async (req, res) => {
  // const { error } = validate(req.body);
  // if (error) return res.status(400).send(error.details[0].message);

  let user = new User({
    name: req.body.name,
    isInvited: req.body.isInvited,
    points: req.body.points,
  });
  user = await User.save();

  res.send(user);
});

module.exports = router; //exporting
