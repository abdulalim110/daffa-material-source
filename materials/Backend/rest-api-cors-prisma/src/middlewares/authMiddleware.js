import jwt from "jsonwebtoken"
import { prisma } from "../lib/prisma";

export const authenticateJWT = (req, res, next) => {
  const authHeader = req.header('Authorization');
  
  if (!authHeader) return res.status(401).json({ info: "Unauthorized" });
  
  const token = authHeader.split(" ")[1];
  
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(401).json({ info: "Unauthorized" });
    req.user = user;
    next();
  });
};

export const getUserId = async (req, res, next)=>{
  const user = await prisma.User.findFirst({
    where: {
      username: req.user.username
    }
  })

  if (user){
    req.userId = user.id
    next()
  }else{
    return res.status(401).json({data: null, message: "User not exists"})
  }
}
