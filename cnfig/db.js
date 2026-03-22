require("dotenv").config()
const mongoose = require("mongoose")

const connecting = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("MongoDB connected")
  } catch (error) {
    console.log("MongoDB error:", error)
    process.exist(1)

  }
}

module.exports = connecting