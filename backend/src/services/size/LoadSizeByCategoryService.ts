
import prismaClient from "../../prisma";

interface SizeRequest {
    category_id: number;
}

export class LoadSizeByCategoryService {
    async execute({ category_id }: SizeRequest) {
        const loadSize = await prismaClient.size.findMany({
            where: {
                category_id: Number(category_id)
            },
            orderBy: {
                name: 'asc'
            }
        })
        return loadSize;
    }
}