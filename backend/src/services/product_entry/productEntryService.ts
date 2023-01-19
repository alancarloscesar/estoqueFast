import prismaClient from "../../prisma";

interface productRequest {
    product_id: number;
    size_id: number;
    price_new: number;
    amount_new: number;
}

export class ProductEntryService {
    async execute({ product_id, size_id, price_new, amount_new }: productRequest) {

        //buscar amount por id para somar no update
        const loadData = await prismaClient.product.findFirst({
            where: {
                id: Number(product_id)
            }
        })

        //upadte, para inserir no bd
        const updateAmountProduct = await prismaClient.product.update({
            where: {
                id: Number(product_id)
            },
            data: {
                amount: String(Number(loadData.amount) + amount_new)
            }
        })

        await prismaClient.size.update({
            where: {
                id: Number(size_id)
            },
            data: {
                price: Number(price_new)
            }
        })

        return updateAmountProduct;
    }
}