import prismaClient from "../../prisma";
import { addDays } from "date-fns";

type FinancialRequest = {
    initial_date: string;
    final_date: string;
}

export class FinancialService {
    async execute({ initial_date, final_date }: FinancialRequest) {

        if(final_date < initial_date){
            throw new Error("Intervalo incorreto, verifique as datas.")
        }

        if (initial_date === final_date) {
            const sale_now_equals = await prismaClient.saleNow.findMany({
                where: {
                    AND: [
                        {
                            date_sale: {
                                gte: new Date(initial_date),
                                lte: addDays(new Date(final_date), 1)
                            }
                        }
                    ]
                },
                orderBy: {
                    id: 'asc'
                }
            })
            return sale_now_equals;
        }

        const sale_now = await prismaClient.saleNow.findMany({
            where: {
                AND: [
                    {
                        date_sale: {
                            gte: new Date(initial_date),
                            lte: addDays(new Date(final_date), 1)
                        }
                    }
                ]
            },
            orderBy: {
                id: 'asc'
            }
        })

        return sale_now;
    }
}