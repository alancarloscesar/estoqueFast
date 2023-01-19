import { Request, Response } from "express";
import { CancelSaleService } from "../../services/sale_now/cancelSaleService";

export class CancelSaleController {



    async handle(req: Request, res: Response) {

        const saleService = new CancelSaleService();
        const sale_id = req.query.sale_id as unknown as number

        await saleService.execute({
            sale_id
        })

        return res.json({
            Deleted: `Venda com id -> ${sale_id} deletada com sucesso.`
        })
    }


}