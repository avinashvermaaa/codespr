import { Router } from "express";
import { compileCode } from "../controllers/codeController.js";

const router = Router();

router.post("/", compileCode);

export default router;
