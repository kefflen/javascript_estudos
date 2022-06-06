import { Router } from "express";
import PecController from "../controllers/PecController";

const pecRoutes = Router()

pecRoutes.post('/', PecController.create)

export default pecRoutes