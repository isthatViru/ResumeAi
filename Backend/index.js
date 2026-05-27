const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

dotenv.config();

const app = express();

app.disable("x-powered-by");

const PORT = process.env.PORT || 3000;

// DB
const connection = require("./config/db");
connection();

// Middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(cookieParser());

app.use(express.json());

app.use("/uploads", express.static("uploads"));

// Health Check
app.get("/", (_req, res) => {
  res.json({
    message: "Server is running",
  });
});

// Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const interviewRouter = require("./routes/interview.routes");
app.use("/api/interview", interviewRouter);

// Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});