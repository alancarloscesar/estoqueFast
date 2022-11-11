import { Router, Request, Response } from "express";

import { isAuthenticated } from "./middlewares/isAuthenticated";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthController } from "./controllers/user/AuthController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { createCategoryController } from "./controllers/category/createCategoryController";

const router = Router();

//rotas para user
router.post('/user', new CreateUserController().handle)
router.post('/session', new AuthController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)

//ROTAS CATEGORY
router.post('/category', isAuthenticated, new createCategoryController().handle)

export { router }

