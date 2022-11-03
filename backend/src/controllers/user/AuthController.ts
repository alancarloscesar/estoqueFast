import { Request, Response } from "express";
import { AuthUserService } from "../../services/user/AuthUserService";

class AuthController{
    async handle(req:Request, res:Response){
        const {email, password} = req.body;
        const authS = new AuthUserService();

        const authUser = await authS.execute({
            email,
            password
        })

        return res.json(authUser)
    }
}

export {AuthController}