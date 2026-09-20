import { prisma } from "../lib/prisma"
import * as bcrypt from 'bcrypt';
import jwt from "jsonwebtoken"

export const register = async (req, res)=>{
  const {username, email, password} = req.body

  const user = await prisma.User.findFirst({
    where: {
      OR: [
        {username},
        {email}
      ]
    }
  })

  if (user){
    return res.status(409).json({data: null, message: "User already exists"})
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  try{
    const data = await prisma.User.create({
      data: {
        username,
        email,
        password: hashedPassword
      }
    })

    res.status(201).json({
      data,
      message: "User was sucessfully registered"
    })
  }catch(err){
    res.status(500).json({
      data: null,
      message: err
    })
  }
}

export const login = async (req, res)=>{
  const {username, email, password} = req.body
  const user = await prisma.User.findFirst({
    where: {
      OR: [
        {username},
        {email}
      ]
    }
  })

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({data: null, message: 'Invalid credentials' });
  }

  const accessToken = jwt.sign(
    { username: user.username},
    process.env.JWT_SECRET
  );

  res.json({

    data: {accessToken},
    message: "user was succesfully logged in"
  })


}