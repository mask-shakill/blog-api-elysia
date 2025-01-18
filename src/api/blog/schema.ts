import { t } from "elysia";

export const schemas = {
  blog: t.Object({
    title: t.String(),
    content: t.String(),
    author: t.String(),
  }),
  params: t.Object({
    id: t.String(),
  }),
};
