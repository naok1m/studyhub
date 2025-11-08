import{ PrismaClient} from "../generated/prisma/index.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";


dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
// Rota teste
app.get("/api", (req, res) => {
  res.json({ message: "API funcionando 🚀" });
});

// Rota para listar usuários
app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});



const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
