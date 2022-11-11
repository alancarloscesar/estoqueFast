

import { Request, Response } from "express";
import { createCategoryService } from "../../services/category/createCategoryService";

class createCategoryController {
    async handle(req: Request, res: Response) {
        const categoryService = new createCategoryService();
        const { name } = req.body;

        const category = await categoryService.execute({ name })

        return res.json(category)
    }
}
export { createCategoryController }