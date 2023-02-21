import { Request, Response } from "express";
import { SalesNowService } from "../../services/sale_now/sales_now_service";

export class SalesNowController {
    async handle(req: Request, res: Response) {

        const salesService = new SalesNowService();

        const { amount, price, product_id, size_id, payment, card, installment, month, year, hours } = req.body

        const sale_now = await salesService.execute({
            amount, price, product_id, size_id, payment, card, installment, month, year, hours
        })

        return res.status(200).json(sale_now)

    }
}