import { NewSizeCategoryService } from "../../services/size/NewSizeCategoryService";

import { Request, Response } from "express";

class NewSizeCategoryController {
    async handle(req: Request, res: Response) {
        const sizeService = new NewSizeCategoryService();

        const { name, price, category_id } = req.body;

        const sizeCreate = await sizeService.execute({
            name,
            price,
            category_id
        })

        return res.json(sizeCreate)
    }
}

export { NewSizeCategoryController }