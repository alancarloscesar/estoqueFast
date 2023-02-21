import { Request, Response } from "express";
import { LoadSalePriceHoursService } from "../../services/sale_now/loadSalePriceHoursService";

class LoadSaleHoursController {
    async handle(req: Request, res: Response) {
        const loadPriceSevice = new LoadSalePriceHoursService();

        const initialDate = req.query.initialDate as string;
        const finalDate = req.query.finalDate as string;
        const hourAtual = req.query.hourAtual as string;


        const loadprice = await loadPriceSevice.execute({ initialDate, finalDate, hourAtual });

        const saleValue = {
            value: loadprice
        }

        return res.json(saleValue);

    }
}

export { LoadSaleHoursController }