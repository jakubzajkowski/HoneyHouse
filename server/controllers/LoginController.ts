import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../prisma/db';

interface LoginControllerBodyType {
    password: string;
    email: string;
  }

const LoginController = async (req: Request, res: Response) => {
    const { password, email }: LoginControllerBodyType = req.body;
    try {
      const user = await prisma.user.findFirst({where:{email: email}})
  
      if (!user) {
         throw 'User not found' 
      }
  
      const isMatch = await bcrypt.compare(password, user.password as string);
  
      if (!isMatch) {
        throw 'Invalid password'
      }
  
      const token = jwt.sign({ user }, process.env.JWT_SECRET_TOKEN as string, {
        expiresIn: process.env.JWT_SECRET_TOKEN_EXPIRES as string,
      });
  
      return res.status(200).json({success:'Logged Successful',token:token});

    } catch (error) {
      return res.status(401).json({ error: error});
    }
  }

export default LoginController