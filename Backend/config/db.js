const mongoose = require("mongoose");

async function connection() {
  try {

    await mongoose.connect(process.env.MONGO_STRING, {
      tls: true,
      tlsAllowInvalidCertificates: false,
    });

    console.log("MongoDB Connected");

  } catch (error) {

    console.log(error);

  }
}

module.exports = connection;