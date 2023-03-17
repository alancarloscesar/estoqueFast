import prismaClient from "../../prisma";
import { hash } from 'bcryptjs'

interface UserRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    async execute({ name, email, password }: UserRequest) {
        //verificando se já existe esse email cadastrado
        const emailUserExist = await prismaClient.user.findFirst({
            where: {
                email: email//se o email do banco for igual ao passado, mostra um erro
            }
        })

        if (emailUserExist) {
            throw new Error("Email já cadastrado!")
            return;
        }

        if (name == '' || email === '' || password === '') {
            throw new Error("Campos NOME, EMAIL e SENHA não podem ficar vazios!");

        }

        //criptando senha
        const passwordHash = await hash(password, 8)

        const userCreate = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash
            },
            select: {
                id: true,
                name: true,
                email: true
            }

        })
        return userCreate
    }
}

export { CreateUserService }