import { Router } from "express";
import {
  createDataItem,
  getDataItems,
  getDataItem,
  updateDataItem,
  deleteDataItem,
} from "../controllers/dataItem";

const router = Router();

router.post("/", createDataItem);
router.get("/", getDataItems);
// router.get("/:id", getDataItem);
// router.put("/:id", updateDataItem);
// router.delete("/:id", deleteDataItem);

export default router;