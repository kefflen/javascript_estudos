import { Router } from "express";
import { AuthenticateUserController } from "./controller/AuthenticateUserController";
import CreateMessageController from "./controller/CreateMessageController";
import { GetLast3Messages } from "./controller/GetLast3Messages";
import { GetProfileUserController } from "./controller/GetProfileUserController";
import { ensureAuthenticated } from "./middleware/ensure-authenticated";

const router = Router()

router.post("/authenticate", new AuthenticateUserController().handle)
router.post("/message", ensureAuthenticated, new CreateMessageController().handle)
router.get("/last3messages", new GetLast3Messages().handle)
router.get("/profile", ensureAuthenticated, new GetProfileUserController().handle)


export { router }
