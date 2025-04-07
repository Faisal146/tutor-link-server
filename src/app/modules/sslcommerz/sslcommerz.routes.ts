import { Router } from "express";
import { SSLController } from "./sslcommerz.controller";

const router = Router();

// Define routes

// router.post(
//     '/validate',
//     SSLController.validatePaymentService
// )
router.post("/init", SSLController.initPayment);

export const SSLRoutes = router;
