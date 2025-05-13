import express from "express";
import {
  getFarms,
  createFarm,
  deleteFarm
} from "../controllers/farm.controller.js";

const router = express.Router();

router.get("/", getFarms);
router.post("/", createFarm);
router.delete("/:id", deleteFarm);

export default router;
