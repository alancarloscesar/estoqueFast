import prismaClient from "../../prisma";


class DetailUserService {
    async execute(user_id: string) {
        const detailuser = await prismaClient.user.findFirst({
            where: {
                id: Number(user_id)
            },
            select: {
                id: true,
                name: true,
                email: true,
                access: true
            }
        })
        return detailuser;
    }
}

export { DetailUserService }