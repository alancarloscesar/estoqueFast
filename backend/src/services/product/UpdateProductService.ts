import prismaClient from "../../prisma";

interface UpdatePropsRequest {
    product_id: number;
    name: string;
    amount: string;
    color: string;
    measure: string;
}

class UpdateProductService {
    async execute({ product_id, name, amount, color, measure }: UpdatePropsRequest) {
        const productUp = await prismaClient.product.update({
            where: {
                id: Number(product_id)
            },
            data: {
                name,
                amount,
                color,
                measure
            }
        })

        return productUp;
    }
}

export { UpdateProductService }