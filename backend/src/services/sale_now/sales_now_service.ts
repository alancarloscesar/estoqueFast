import { format, getMonth, getYear } from "date-fns";
import { ptBR } from "date-fns/locale";
import prismaClient from "../../prisma";

interface SalesNowRequest {
    amount: number,
    price: number,
    product_id: number,
    size_id: number,
    payment: string,
    card: string,
    installment: string,
    month: string;
    year: string;
    hours: string;
}

export class SalesNowService {


    async execute({ amount, product_id, size_id, payment, card, installment, month, year, hours }: SalesNowRequest) {

        //busca dados para calcular o price no data
        const loadData = await prismaClient.product.findFirst({
            where: {
                size_id
            },
            include: {
                size: {}
            }
        })

        //cria uma venda no banco
        const sales = await prismaClient.saleNow.create({

            data: {
                amount,
                price: Number(loadData.size.price) * amount,
                product_id,
                size_id,
                payment,
                card,
                installment,
                month: format(new Date(), 'MMMM', { locale: ptBR }).toString(),
                year: new Date().getFullYear().toString(),
                hours: format(new Date(), 'H', { locale: ptBR }).toString(),
            },
            include: {
                size: {},
                product: {}
            }
        })

        //atualiza a quantidade de produtos subtraindo
        await prismaClient.product.update({
            where: {
                id: product_id
            },
            data: {
                amount: String(Number(sales.product.amount) - amount)
            }
        })

        return sales;
    }

}