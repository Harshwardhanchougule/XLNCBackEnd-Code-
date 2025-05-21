import express from "express";
import AddServices from "../models/addServices";

const router = express.Router();

// Create user
router.post("/", async (req, res) => {
  const { name, url } = req.body;
  try {
    const service = new AddServices({ name, url });
    await service.save();
    res.status(201).json(service);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
});

// Get all users
router.get("/", async (req, res) => {
  try {
    const services = await AddServices.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
});

export default router;
