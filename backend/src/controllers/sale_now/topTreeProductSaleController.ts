import { Request, Response } from "express";
import { topTreeProductSaleService } from "../../services/sale_now/topTreeProductSaleService";


export class topTreeProductSaleController {
    async handle(req: Request, res: Response) {

        const topService = new topTreeProductSaleService();

        const loadTopTree = await topService.execute();


        return res.json(loadTopTree)
    }
}