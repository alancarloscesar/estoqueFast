import { Request, Response } from "express";
import { PaginationProductService } from "../../services/product/PaginationProductService";

class PaginationProductController {
    async handle(req: Request, res: Response) {
        const service = new PaginationProductService();

        const take = req.query.take as unknown as number;
        const skip = req.query.skip as unknown as number;
        const product = req.query.product as string;

        const paginationProduct = await service.execute({
            product,
            take,
            skip
        })

        return res.status(200).json(paginationProduct)
    }
}

export { PaginationProductController }