import { Request, Response } from "express";
import { LoadSalePriceService } from "../../services/sale_now/loadSalePriceMonthSevice";

class LoadSaleMounthsController {
    async handle(req: Request, res: Response) {
        const loadPriceSevice = new LoadSalePriceService();

        const month = req.query.month as string;

        const loadprice = await loadPriceSevice.execute({ month });

        const mounths = {
            valorVendido: loadprice
        }


        return res.json(mounths);
    }
}

export { LoadSaleMounthsController }