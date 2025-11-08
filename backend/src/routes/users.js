// backend/src/routes/users.js
import express from "express";
import { PrismaClient } from "../../generated/prisma/index.js";
import { verifyToken } from "../middleware/verifiyToken.js"; 

const prisma = new PrismaClient();
const router = express.Router();

router.get("/me", verifyToken, async (req, res) => {
  try {

    const userId = req.user.id;

    const user = await prisma.user.findUnique({
      where: { id: userId },

      select: {
        id: true,
        name: true,
        email: true,
        role: true, //
        createdAt: true
      }
    });

    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    res.status(200).json(user);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar dados do usuário" });
  }
});

export default router;