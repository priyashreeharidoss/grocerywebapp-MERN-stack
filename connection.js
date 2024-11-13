const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("App Is Connected To Database Successfully...!!");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1); // Exit with failure
  }
};

module.exports = connectDB;
