import { Router } from "express";
import {
  createWDPageImage,
  getWDPageImages,
  getWDPageImageById,
  updateWDPageImage,
  deleteWDPageImage,
} from "../controllers/wdPageImagescontroller";
import upload from "../utils/fileUpload";

const router = Router();

router.post("/", upload.single("image"), createWDPageImage);
router.get("/", getWDPageImages);
router.get("/:id", getWDPageImageById);
router.put("/:id", upload.single("image"), updateWDPageImage);
router.delete("/:id", deleteWDPageImage);

export default router;
