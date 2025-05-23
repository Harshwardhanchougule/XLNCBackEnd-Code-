// src/routes/api/items.ts
import { Router, Request, Response } from "express";
import DataItem from "../models/DataItem"; // Adjust the import path as necessary
const router: Router = Router();

// @route   POST /api/items
// @desc    Add a new name and URL
// @access  Public
router.post("/", async (req: any, res: any) => {
  const { name, url } = req.body;

  // Basic validation
  if (!name || !url) {
    return res
      .status(400)
      .json({ msg: "Please enter all fields (name and url)" });
  }

  try {
    // Check if URL already exists
    let dataItem = await DataItem.findOne({ url });
    if (dataItem) {
      return res.status(400).json({ msg: "URL already exists" });
    }

    // Create a new data item instance
    dataItem = new DataItem({
      name,
      url,
    });

    // Save the data item to the database
    await dataItem.save();

    res.json(dataItem); // Respond with the newly created data item
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET /api/items
// @desc    Get all items
// @access  Public
router.get("/", async (req: Request, res: Response) => {
  try {
    const items = await DataItem.find().sort({ date: -1 }); // Sort by newest first
    res.json(items);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

export default router;
