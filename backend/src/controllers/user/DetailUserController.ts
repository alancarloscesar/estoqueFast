import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";

class DetailUserController {
    async handle(req: Request, res: Response) {
        const user_id = Number(req.query.user_id)

        const detailUserService = new DetailUserService();
        const detail = await detailUserService.execute(user_id.toString())

        return res.json(detail)
    }
}

export { DetailUserController }