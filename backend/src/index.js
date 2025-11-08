
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "../generated/prisma/index.js";

import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js"; 
import userRoutes from "./routes/users.js";

dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());


app.use("/api/auth", authRoutes);


app.use("/api/users", userRoutes); 

app.use("/api/posts", postRoutes); //

// Rota teste
app.get("/api", (req, res) => {
  res.json({ message: "API funcionando 🚀" });
});



const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));