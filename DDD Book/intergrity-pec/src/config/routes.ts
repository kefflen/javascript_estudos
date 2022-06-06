import { Router } from "express";
import pecRoutes from "../routes/PecRoutes";

const routes = Router()

routes.use('/pec', pecRoutes)

export default routes