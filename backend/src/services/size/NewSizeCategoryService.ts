import { Size } from "@prisma/client";
import prismaClient from "../../prisma";
interface SizeRequest {
    name: string;
    price: number;
    category_id: number;
}

class NewSizeCategoryService {


    async execute({ name, price, category_id }: SizeRequest) {

        const sizeExists = await prismaClient.size.findFirst({
            where:{
                name: name,
                category_id: category_id
            }
        })

        if(sizeExists){
            throw new Error("Tamanho já cadastrado!")
        }

        if (name === '' || price === null || category_id=== null) {
            throw new Error("Preencha todos os campos!")
        }

        const size = await prismaClient.size.create({
            data: {
                name: name,
                price: Number(price).toFixed(2),
                category_id: category_id
            }
        })


        return size;
    }
}

export { NewSizeCategoryService }