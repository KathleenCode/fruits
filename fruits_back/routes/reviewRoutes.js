import reviewControl from "../controller/reviewControl.js";
import express from "express";

const router =  express.Router();

router.post("/", reviewControl.addRev);
router.get("/", reviewControl.getRev);
router.put("/:id", reviewControl.updtRev);
router.delete("/:id", reviewControl.delRevi);

export default router;