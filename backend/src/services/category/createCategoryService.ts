import prismaClient from "../../prisma";

interface categoryRequest {
    name: string;
}

class createCategoryService {
    async execute({ name }: categoryRequest) {

        const categoryExist = await prismaClient.category.findFirst({
            where: {
                name: name
            }

        })

        //verificando se a categoria existe
        if (categoryExist) {
            throw new Error("Categoria já cadastrada!")
        }

        if(name === ''){
            throw new Error("Preencha o campo categoria.")
        }

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