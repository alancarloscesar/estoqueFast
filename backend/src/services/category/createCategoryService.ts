import prismaClient from "../../prisma";

interface categoryRequest {
    name: string;
}

class createCategoryService {
    async execute({ name }: categoryRequest) {
        const category = await prismaClient.category.create({
            data: {
                name: name
            },
            select: {
                id: true,
                name: true
            }
        })
        return category;
    }
}

export { createCategoryService }