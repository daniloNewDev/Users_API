const mongoose = require("mongoose")
const getConnect = () => {
  const url = process.env.MONGO_URL
  mongoose.connect(url)
  return mongoose
}
module.exports = {
  getConnect,
  mongoose,
}
