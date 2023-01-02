import { Request, Response } from "express";

import { DeleteProductByIdService } from "../../services/product/DeleteProductByIdService";

export class DeleteProductByIdController {
    async handle(req: Request, res: Response) {
        const prodService = new DeleteProductByIdService();

        const product_id = req.query.product_id as unknown as number;

        await prodService.execute(product_id)

        return res.json({
            Sucess: `Produto deletado com sucesso!`
        })
    }
}