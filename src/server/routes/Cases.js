import express from "express";
import dbConnect from "../lib/dbconnect.js";
import Case from "../models/Cases.js";

const router = express.Router();

// Fetch all cases
router.get("/", async (req, res) => {
  await dbConnect();
  try {
    const cases = await Case.find({});
    res.status(200).json({ success: true, data: cases });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Add a new case
router.post("/", async (req, res) => {
  await dbConnect();
  try {
    const newCase = await Case.create(req.body);
    res.status(201).json({ success: true, data: newCase });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Delete a case
router.delete("/:id", async (req, res) => {
  await dbConnect();
  try {
    const { id } = req.params;
    await Case.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Case deleted successfully." });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
