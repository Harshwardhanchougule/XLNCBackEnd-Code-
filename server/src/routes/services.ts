import { Router } from "express";
import {
  createService,
  getServices,
  deleteService,
} from "../controllers/service";

const router = Router();

router.post("/", createService);
router.get("/", getServices);
// router.delete("/:id", deleteService);

export default router;
