import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { connectDB } from "./db/db";
import { blogRoutes } from "./api/blog/blogRoutes";

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;

const startServer = async () => {
  try {
    const app = new Elysia().use(swagger()).use(blogRoutes);

    await connectDB();
    console.log("📦 Database connected successfully");

    // Start server
    app.listen(PORT, () => {
      console.log(`🦊 Elysia is running at http://localhost:${PORT}`);
    });

    process.on("SIGTERM", () => {
      console.log("Received SIGTERM. Performing graceful shutdown...");
      process.exit(0);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
