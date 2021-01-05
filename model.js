const mongoose = require("mongoose"); //importing required modules
const Joi = require("joi");

const User = mongoose.model(
  //defining the database schema
  "Users",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
    isInvited: {
      type: Boolean,
      default: false,
    },
    points: {
      type: Number,
      default: 0,
    },

    invitedBy: {
      type: String,
      default: null,
    },
  })
);

function validateUser(user) {
  //validating the user
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    isInvited: Joi.boolean(),
    points: Joi.number().integer().required(),
    invitedBy: Joi.string(),
  };

  return Joi.validate(user, schema);
}

exports.User = User; //exporting
exports.validate = validateUser;
