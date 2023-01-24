import { Request, Response } from "express";
import { LoadSizeByCategoryService } from "../../services/size/LoadSizeByCategoryService";

export class LoadSizeByCategoryController {
    async handle(req: Request, res: Response) {
        
        const loadService = new LoadSizeByCategoryService();

        const category_id = req.query.category_id as unknown as number
        // const { category_id } = req.body

        const load = await loadService.execute({
            category_id
        });

        return res.json(load)
    }
}