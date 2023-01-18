import { Router, Request, Response } from "express";

import { isAuthenticated } from "./middlewares/isAuthenticated";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthController } from "./controllers/user/AuthController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { createCategoryController } from "./controllers/category/createCategoryController";
import { loadCategoryController } from "./controllers/category/loadCategoryController";

import { NewSizeCategoryController } from "./controllers/size/NewSizeCategoryController";

import { NewProductController } from "./controllers/product/NewProductController";
import { PaginationProductController } from "./controllers/product/PaginationProductController";
import { UpdateProductController } from "./controllers/product/UpdateProductController";
import { DeleteProductByIdController } from "./controllers/product/DeleteProductByIdProduct";

import { SalesNowController } from "./controllers/sale_now/sales_now_controller";

const router = Router();

//rotas para user
router.post('/user', new CreateUserController().handle)
router.post('/session', new AuthController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)

//ROTAS CATEGORY
router.post('/category', isAuthenticated, new createCategoryController().handle)
router.get('/loadCategory', isAuthenticated, new loadCategoryController().handle)

//ROTAS SIZE
router.post('/size', isAuthenticated, new NewSizeCategoryController().handle)

//ROTAS PRODUCT
router.post('/product', isAuthenticated, new NewProductController().handle)
router.get('/pagination', isAuthenticated, new PaginationProductController().handle)
router.put('/product/update', isAuthenticated, new UpdateProductController().handle)
router.delete('/product/delete', isAuthenticated, new DeleteProductByIdController().handle)

//ROTAS SALES NOW
router.post('/sale', isAuthenticated, new SalesNowController().handle)


export { router }

