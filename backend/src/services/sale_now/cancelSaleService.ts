import prismaClient from "../../prisma";

interface SaleCancelRequest {
    sale_id: number
}

export class CancelSaleService {
    async execute({ sale_id }: SaleCancelRequest) {
        const saleCancel = await prismaClient.saleNow.delete({
            where: {
                id: Number(sale_id)
            }
        })

        return saleCancel;
    }
}