import { Hono } from "hono";
import { verify } from "hono/jwt";
import { userRouter } from "./routes/UserRoute";
import { blogRouter } from "./routes/BlogRoute";

// Create the main Hono app
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);

app.get("/", (c) => {
  return c.text("Hello Hono");
});

export default app;
