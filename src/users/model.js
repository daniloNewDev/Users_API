const { getConnect } = require("../db/mongoose")
const mongoose = getConnect()
const Schema = mongoose.Schema

const UserSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  idade: {
    type: Number,
    required: true,
  },
})

const UserModel = mongoose.model("User", UserSchema)
module.exports = UserModel
