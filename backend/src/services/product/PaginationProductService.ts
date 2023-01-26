import prismaClient from "../../prisma";

interface PaginationRequest {
    product: string;
    take: number;
    skip: number;
}

class PaginationProductService {
    async execute({ product, take, skip }: PaginationRequest) {
        const pagination = await prismaClient.product.findMany({
            take: Number(take),
            skip: Number(skip),
            where: {
                name: {
                    contains: product,
                    mode: "insensitive"//pegando maiusc e minusc.
                }
            },
            orderBy: {
                id: "asc"
            },
            include: {
                size: {}
            }
        })
        return pagination;
    }
}

export { PaginationProductService }