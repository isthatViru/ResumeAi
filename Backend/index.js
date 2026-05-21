const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = "localhost";

// DB
const connection = require("./config/db");
connection();

const invokeGeminiAI=require("./services/ai.services")
invokeGeminiAI()

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Health check
app.get("/", (_req, res) => {
  res.json({ message: "Server is running" });
});

 const authRoutes=require("./routes/authRoutes")
 app.use('/api',authRoutes)

// Server start
app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});