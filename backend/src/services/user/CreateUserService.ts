import prismaClient from "../../prisma";

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

        if(emailUserExist){
            throw new Error("Email já cadastrado!")
            return;
        }

        const userCreate = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: password
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