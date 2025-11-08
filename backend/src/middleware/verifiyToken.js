import jwt from "jsonwebtoken";

// Este middleware vai verificar o token JWT
export const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  // O token vem no formato "Bearer TOKEN_STRING"
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return res.status(401).json({ error: "Token não fornecido" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Token inválido" });
    }
    
    req.user = user;
    next(); 
  });
};