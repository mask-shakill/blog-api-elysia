import { Elysia } from "elysia";
import { BlogController } from "./blogController";
import { schemas } from "./schema";

export const blogRoutes = new Elysia()

  .post("/blogs", ({ body }) => BlogController.create({ body }), {
    body: schemas.blog,
  })

  .get("/blogs", () => BlogController.getAll())

  .get("/blogs/:id", ({ params }) => BlogController.getById({ params }), {
    params: schemas.params,
  })

  .put(
    "/blogs/:id",
    ({ params, body }) => BlogController.update({ params, body }),
    { params: schemas.params, body: schemas.blog }
  )

  .delete("/blogs/:id", ({ params }) => BlogController.delete({ params }), {
    params: schemas.params,
  });
