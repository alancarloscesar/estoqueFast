import { Request, Response } from "express";
import { FinancialService } from "../../services/financial/financialService";

export class financialController {
    async handle(req: Request, res: Response) {
        const finanService = new FinancialService();

        const { initial_date, final_date } = req.body;

        const financial = await finanService.execute({
            initial_date,
            final_date
        })


        return res.json(financial)

    }
}