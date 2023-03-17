import prismaClient from "../../prisma";

interface DeleteUser {
    email: string
}

export class DeleteUserTestService {
    async execute({ email }: DeleteUser) {
        const userDel = await prismaClient.user.deleteMany({
            where: {
                email
            }
        })

        return userDel;
    }
}