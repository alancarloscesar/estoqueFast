import { Request, Response } from "express";
import { DeleteUserTestService } from "../../services/user/DeleteUserTestService";


export class DeleteUserTestController {
    async handle(req: Request, res: Response) {

        const delService = new DeleteUserTestService();

        const { email } = req.body;

        const result = await delService.execute({
            email
        })

        return res.json(result)
    }


}