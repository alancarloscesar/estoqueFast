import prismaClient from "../../prisma";

interface ProductRequest {
    name: string;
    amount: string;
    color: string;
    stock: boolean;
    measure: string;

    category_id: number;
    size_id: number;
}

class NewProductService {
    async execute({ name, amount, color, stock, measure, category_id, size_id }: ProductRequest) {

        const productExist = await prismaClient.product.findFirst({
            where:{
                name,
                category_id,
                size_id
            }
        })

        if(productExist){
            throw new Error("Este produto já foi cadastrado na base dados.")
        }

        const productS = await prismaClient.product.create({
            data: {
                name,
                amount,
                color,
                stock,
                measure,
                category_id,
                size_id
            }
        })
        return productS;
    }
}

export { NewProductService }