// src/routes/imageRoutes.ts
import express from "express";
import multer from "multer";
import Image from "../models/Image";
import path from "path";
import fs from "fs";

const router = express.Router();

// Configure storage for uploaded images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = "uploads/images";
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif|svg/;
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = filetypes.test(file.mimetype);

    if (extname && mimetype) {
      return cb(null, true);
    }
    cb(new Error("Only image files are allowed!"));
  },
});

// POST - Create new image
router.post("/", upload.single("image"), async (req: any, res: any) => {
  try {
    const { name, description } = req.body;
    const imageUrl = req.file ? `/uploads/images/${req.file.filename}` : null;

    if (!name || !imageUrl) {
      return res.status(400).json({ message: "Name and image are required" });
    }

    const newImage = await Image.create({
      name,
      description,
      imageUrl,
    });

    res.status(201).json(newImage);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server error", error: (error as Error).message });
  }
});

// GET - Get all images
router.get("/", async (req, res) => {
  try {
    const images = await Image.find().sort({ createdAt: -1 });
    res.json(images);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server error", error: (error as Error).message });
  }
});

// DELETE - Delete image by ID
router.delete("/:id", async (req: any, res: any) => {
  try {
    const image = await Image.findById(req.params.id);

    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }

    // Delete file from filesystem
    if (image.imageUrl) {
      const filePath = path.join(__dirname, "../../public", image.imageUrl);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    // Delete from database
    await Image.findByIdAndDelete(req.params.id);

    res.json({ message: "Image deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server error", error: (error as Error).message });
  }
});

export default router;
