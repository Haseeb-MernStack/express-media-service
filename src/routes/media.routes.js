import express from "express";
import {upload} from "../config/multer.config.js";
import {uploadSingle} from "../controllers/media.controller.js";

const router = express.Router();

router.post("/upload", upload.single("file"), uploadSingle);

export default router;