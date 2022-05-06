import { Prisma } from "@config/prisma";
import { Request, Response, Router } from "express";

const routes = Router();

routes.get("/examples", async (request: Request, response: Response) => {

    const examples = await Prisma.example.findMany({
        where: {
            name: "Igor",
            // id: {in: []}
        }
    });

    return response.json(examples);
})

routes.post("/examples", async (request: Request, response: Response) => {
    const example = await Prisma.example.create({
        data: {
            name: "Gabriel"
        }
    });

    return response.json(example);

})

export default routes;