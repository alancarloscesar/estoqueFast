import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
    async handle(req: Request, res: Response) {
        const { email, name, password } = req.body;
        const createUser = new CreateUserService()

        const user = await createUser.execute({ name, email, password });

        return res.json(user)
    }

}

export { CreateUserController }