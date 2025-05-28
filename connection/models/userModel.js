const {
  Schema,
  model
} = require("mongoose");

//schema kaise bnate h
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50
  },
  age:{
    type: Number,
    required: true,
    min: 0,
    max: 120
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = model("User", UserSchema)
module.exports = UserModel;
