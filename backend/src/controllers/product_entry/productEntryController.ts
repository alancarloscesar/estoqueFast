import { Request, Response } from "express";
import { ProductEntryService } from "../../services/product_entry/productEntryService";

export class ProductEntryController {
    async handle(req: Request, res: Response) {
        const prodService = new ProductEntryService();
        
        const { amount_new, price_new, product_id, size_id } = req.body;
        // const product_id = req.query.product_id as unknown as number;
        // const size_id = req.query.size_id as unknown as number;

        await prodService.execute({
            product_id,
            size_id,
            amount_new,
            price_new
        })

        return res.status(200).json({
            Updated: `Entrada de Produto/size atualizado com sucesso.`
        })
    }
}