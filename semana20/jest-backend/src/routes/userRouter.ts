import express from "express"
import { UserController } from "../controller/UserController"

const userController: UserController = new UserController()

export const userRouter = express.Router()

userRouter.get("/profile/:id", userController.getUserById)
