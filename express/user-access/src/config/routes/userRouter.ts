import { Router } from "express";
import { can } from "../../middleware/accessController";
import { ensureAutheticated } from "../../middleware/ensureAuthenticated";
import { makeCreateUserCompleteControllerFactory } from "../factories/makeCreateCompleteUserControllerFactory";
import { makeCreateUserControllerFactory } from "../factories/makeCreateUserControllerFactory";
import { makeGetPermissionsByUsername } from "../factories/makeGetPermissionsByUsernameController";
import { makeLoginWithUsernameControllerFactory } from "../factories/makeLoginWithUsernameControllerFactory";

const userRouter = Router()

userRouter.post('', ensureAutheticated, can(['create_users']), makeCreateUserControllerFactory().handle)
userRouter.post('/login', makeLoginWithUsernameControllerFactory().handle)
userRouter.post('/admin/create-user', makeCreateUserCompleteControllerFactory().handle)
userRouter.get('/:username/permissions', makeGetPermissionsByUsername().handle)

export {
  userRouter
}

