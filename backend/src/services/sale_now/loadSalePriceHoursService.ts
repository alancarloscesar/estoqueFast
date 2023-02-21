import prismaClient from "../../prisma";
import { addDays, getHours } from "date-fns";

interface HoursLike {
    initialDate: string;
    finalDate: string;
    hourAtual: string;
}

class LoadSalePriceHoursService {
    async execute({ initialDate, finalDate, hourAtual }: HoursLike) {

        const loadSale = await prismaClient.saleNow.findMany({

            where: {
                date_sale: {
                    gte: new Date(initialDate),
                    lte: addDays(new Date(finalDate), 1)
                },
                AND: {
                    hours: {
                        contains: hourAtual,
                        mode: "insensitive"//pegando maiusc e minusc.
                    }
                }
            },

            orderBy: {
                date_sale: 'asc'
            }

        });

        //pegando a soma dos preços
        const priceSales = loadSale.map((item) => item.price)
        const sum = priceSales.reduce((accumulator, value) => accumulator + Number(value), 0);

        return sum;
    }
}

export { LoadSalePriceHoursService }