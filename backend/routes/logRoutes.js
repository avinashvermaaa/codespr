import { Router } from "express";
import { logHomeVisit } from "../controllers/logController.js";

const router = Router();

router.get("/", logHomeVisit);

export default router;
