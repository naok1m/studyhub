import express from "express";
import { PrismaClient } from "../../generated/prisma/index.js";
import { verifyToken } from "../middleware/verifiyToken.js"; // Importe o middleware

const prisma = new PrismaClient();
const router = express.Router();

// ROTA 1: Obter todos os posts (Público)
router.get("/", async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc", // Mostrar os mais recentes primeiro
      },
      include: {
        author: { // Incluir o autor do post
          select: {
            name: true, // Queremos apenas o nome do autor
          },
        },
      },
    });
    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar posts" });
  }
});

// ROTA 2: Criar um novo post (Protegido)
// Usamos o 'verifyToken' antes da lógica da rota
router.post("/", verifyToken, async (req, res) => {
  try {
    const { content } = req.body;
    // 'req.user' foi adicionado pelo middleware 'verifyToken'
    const authorId = req.user.id; 

    if (!content) {
      return res.status(400).json({ error: "Conteúdo não pode ser vazio" });
    }

    const newPost = await prisma.post.create({
      data: {
        content,
        authorId,
      },
      include: { // Retorna o post recém-criado com o nome do autor
        author: {
          select: { name: true }
        }
      }
    });

    res.status(201).json(newPost);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao criar post" });
  }
});

export default router;