import { Request, Response } from "express";
import { NewProductService } from "../../services/product/NewProductService";

class NewProductController {
    async handle(req: Request, res: Response) {
        const productService = new NewProductService();

        const { name, amount, color, stock,measure, category_id, size_id } = req.body;
        const product = await productService.execute({
            name,
            amount,
            color,
            stock,
            measure,
            category_id,
            size_id
        })

        return res.json(product)
    }
}

export { NewProductController }