const express = require("express");
const Invoice = require("../models/Invoice");
const router = express.Router();

// Get all invoices
router.get("/", async (req, res) => {
  try {
    const invoices = await Invoice.find().populate("order_id");
    res.status(200).json(invoices);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get invoice by ID
router.get("/:id", async (req, res) => {
  try {
    const invoice = await Invoice.findById(req.params.id).populate("order_id");
    if (!invoice) {
      return res.status(404).json({ error: "Invoice not found" });
    }
    res.status(200).json(invoice);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Create a new invoice
router.post("/", async (req, res) => {
  try {
    const invoice = new Invoice(req.body);
    await invoice.save();
    res.status(201).json(invoice);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update an invoice
router.put("/:id", async (req, res) => {
  try {
    const invoice = await Invoice.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!invoice) {
      return res.status(404).json({ error: "Invoice not found" });
    }
    res.status(200).json(invoice);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete an invoice
router.delete("/:id", async (req, res) => {
  try {
    const invoice = await Invoice.findByIdAndDelete(req.params.id);
    if (!invoice) {
      return res.status(404).json({ error: "Invoice not found" });
    }
    res.status(200).json({ message: "Invoice deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
