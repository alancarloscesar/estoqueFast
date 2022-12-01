import { loadCategorySevice } from "../../services/category/loadCategoryService";
import { Request, Response } from "express";

class loadCategoryController {
    async handle(req: Request, res: Response) {
        const loadCatService = new loadCategorySevice();
        const loadCategory = await loadCatService.execute()

        return res.json(loadCategory);
    }
}

export { loadCategoryController }