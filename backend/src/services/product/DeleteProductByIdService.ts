import prismaClient from "../../prisma";

export class DeleteProductByIdService {
    async execute(product_id: number) {
        const prodDel = await prismaClient.product.delete({
            where: {
                id: Number(product_id)
            }
        })

        return prodDel;
    }
}