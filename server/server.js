const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("Database connection error : ", err));

// Import Routes
const userRoutes = require("./src/routes/users");
const productRoutes = require("./src/routes/products");
const customerRoutes = require("./src/routes/customers");
const vendorRoutes = require("./src/routes/vendors");
const orderRoutes = require("./src/routes/orders");
const invoiceRoutes = require("./src/routes/invoices");
const stockRoutes = require("./src/routes/stocks");

// Use Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/vendors", vendorRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/invoices", invoiceRoutes);
app.use("/api/stocks", stockRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
