import prismaClient from "../../prisma";

interface monthLike {
    month: string;
}

class LoadSalePriceService {
    async execute({ month }: monthLike) {
        const loadSale = await prismaClient.saleNow.findMany({
            where: {
                month: {
                    contains: month,
                    mode: "insensitive"//pegando maiusc e minusc.
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

export { LoadSalePriceService }