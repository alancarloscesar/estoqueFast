

import prismaClient from "../../prisma";

class loadCategorySevice {

    async execute() {
        const loadcat = await prismaClient.category.findMany({
            select: {
                id: true,
                name: true,
                created_at: true
            }
        })
        return loadcat;
    }
}

export { loadCategorySevice }