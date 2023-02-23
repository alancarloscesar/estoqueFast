import prismaClient from "../../prisma";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";



class topTreeProductSaleService {
    async execute() {
        const salePodium = await prismaClient.saleNow.findMany({
            where: {
                //mes e ano atual
                month: format(new Date(), 'MMMM', { locale: ptBR }).toString(),
                year: new Date().getFullYear().toString(),
            },
            orderBy: {
                saleCont: 'desc'
            },
            take: 3,//max de results

            distinct: ['product_id'],//náo deixa duplica o campo


            include: {
                product: {},
            }
        })

        return salePodium;
    }
}

export { topTreeProductSaleService }