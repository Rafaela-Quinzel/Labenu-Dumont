import express from "express"
import { UserController } from "../controller/UserController"

const userController: UserController = new UserController()

export const userRouter = express.Router()


userRouter.post("/signup", userController.signup)
userRouter.get("/login", userController.login)
userRouter.get("/:id", userController.getUserById)
userRouter.get("/all", userController.getAllUsers)
userRouter.get("/profile/:id", userController.getUserProfile)
