
import request from "supertest"
import app from "../../server";
import { describe, expect, it } from '@jest/globals';


describe("User tests use cases", () => {


    it("Should to create a new user", async () => {

        let emailCreate = Date.now();//criando um email aleatório
        let email = `${emailCreate}@gmail.com`

        let user = {//objeto user
            name: "Alan",
            email,
            password: "123123"
        }

        const response = await request(app)
            .post("/user")
            .send(user)


        expect(response.statusCode).toEqual(200);
        expect(response.body.email).toEqual(email)
        expect(response.body.name).toEqual(user.name)


    });



});