const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// const Enquiry = require("./models/Enquiry");

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
  });

// Health Check Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Kidrove Backend is running",
  });
});

// Registration API
app.post("/api/enquiry", async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    // Validation
    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address",
      });
    }

    if (phone.replace(/\D/g, "").length < 10) {
      return res.status(400).json({
        success: false,
        message: "Invalid phone number",
      });
    }

    // Save to MongoDB
    const enquiry = await Enquiry.create({
      name,
      email,
      phone,
    });

    return res.status(201).json({
      success: true,
      message: "Registration submitted successfully",
      data: enquiry,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});