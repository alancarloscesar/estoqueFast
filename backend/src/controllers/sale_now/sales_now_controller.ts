import { Request, Response } from "express";
import { SalesNowService } from "../../services/sale_now/sales_now_service";

export class SalesNowController {
    async handle(req: Request, res: Response) {

        const salesService = new SalesNowService();

        const { amount, price, product_id, size_id } = req.body

        const sale_now = await salesService.execute({
            amount, price, product_id, size_id
        })

        return res.status(200).json(sale_now)

    }
}