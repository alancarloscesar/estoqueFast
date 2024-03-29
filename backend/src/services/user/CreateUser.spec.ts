
import request from "supertest"
import app from "../../server";
import { describe, expect, it } from '@jest/globals';


describe("User creation test cases", () => {


    it("Should to create a new user", async () => {

        let user = {
            name: "Alan",
            email: "alan@test.com",
            password: "123123"
        }

        const response = await request(app)
            .post("/user")
            .send(user)

        expect(response.status).toBe(200);
    });

    it("Should verify if the email already exists", async () => {
        const response = await request(app)
            .post("/user")
            .send({
                name: "Alan exist",
                email: "alan@test.com",
                password: "123123exist"
            })

        expect(response.body.errr).toEqual("Email já cadastrado!")
    });

    it("Should check fields (name, email and password) that are mandatory.", async () => {
        const response = await request(app)
            .post("/user")
            .send({
                name: "",
                email: "",
                password: ""
            });

        expect(response.body.errr).toEqual("Campos NOME, EMAIL e SENHA não podem ficar vazios!")
    })

    //rota para delete de user test
    it("Delete bd tests.", async () => {
        await request(app)
            .delete("/del")
            .send({
                email: "alan@test.com",
            });

        // expect(s).toEqual("Campos NOME, EMAIL e SENHA não podem ficar vazios!")
    })

});

describe("Login tests cases", () => {
    
    
    it("Should verify email and password exist.", async () => {
        const response = await request(app)
            .post("/session")
            .send({
                email: "alancarlos@dev.com",
                password: "123123"
            })
    
        expect(response.body.errr).toEqual("Email/Password não existe na base de dados")
    });

    it("Should check if the user registration returns a token.", async () => {
        const response = await request(app)
            .post("/session")
            .send({
                email: "alan@dev.com",
                password: "123123"
            })
    
        expect(response.body).toHaveProperty("token");
    });

});