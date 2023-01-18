import { empty } from "@prisma/client/runtime";
import prismaClient from "../../prisma";

interface SalesNowRequest {
    amount: number,
    price: number,
    product_id: number,
    size_id: number
}

export class SalesNowService {


    async execute({ amount, product_id, size_id }: SalesNowRequest) {

        const loadData = await prismaClient.product.findFirst({
            where: {
                size_id
            },
            include: {
                size: {}
            }
        })

        const sales = await prismaClient.saleNow.create({

            data: {
                amount,
                price: Number(loadData.size.price) * amount,
                product_id,
                size_id
            },
            include: {
                size: {},
                product: {}
            }
        })

        return sales;
    }

}