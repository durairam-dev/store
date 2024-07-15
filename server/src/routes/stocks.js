const express = require("express");
const Stock = require("../models/Stock");
const router = express.Router();

// Get all stocks
router.get("/", async (req, res) => {
  try {
    const stocks = await Stock.find()
      .populate("product_id")
      .populate("vendor_id");
    res.status(200).json(stocks);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get stock by ID
router.get("/:id", async (req, res) => {
  try {
    const stock = await Stock.findById(req.params.id)
      .populate("product_id")
      .populate("vendor_id");
    if (!stock) {
      return res.status(404).json({ error: "Stock not found" });
    }
    res.status(200).json(stock);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Create a new stock
router.post("/", async (req, res) => {
  try {
    const stock = new Stock(req.body);
    await stock.save();
    res.status(201).json(stock);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a stock
router.put("/:id", async (req, res) => {
  try {
    const stock = await Stock.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!stock) {
      return res.status(404).json({ error: "Stock not found" });
    }
    res.status(200).json(stock);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a stock
router.delete("/:id", async (req, res) => {
  try {
    const stock = await Stock.findByIdAndDelete(req.params.id);
    if (!stock) {
      return res.status(404).json({ error: "Stock not found" });
    }
    res.status(200).json({ message: "Stock deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
