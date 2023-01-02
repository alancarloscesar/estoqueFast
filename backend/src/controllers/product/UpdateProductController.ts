import { Request, Response } from "express";
import { UpdateProductService } from "../../services/product/UpdateProductService";

class UpdateProductController {
    async handle(req: Request, res: Response) {
        const upService = new UpdateProductService();

        const {
            name,
            amount,
            color,
            measure
        } = req.body;

        const product_id = req.query.product_id as unknown as number;

        await upService.execute({
            name,
            amount,
            color,
            measure,
            product_id
        })

        return res.json({
            Sucess: `Produto ${name} atualizado com sucesso!`
        })
    }
}

export { UpdateProductController }