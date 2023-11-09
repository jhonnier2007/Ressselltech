import { Router } from "express";
import {CreandoOrder}from '../contrtoles/payment.controler'

const router = Router();


router.get("/nosotros", (req, res) => res.send("../nosotros.html"));
router.get("/inicio", (req, res) => res.send("wedhook"));
router.get("/reselltech", (req, res) => res.send("../resell-tech.html"));

export default router;
