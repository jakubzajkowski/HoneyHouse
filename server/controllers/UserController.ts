import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import prisma from '../prisma/db';

const UserController = async (req: Request, res: Response) => {
    const token = req.headers.authorization?.replace('Bearer ', '');
    try {
      const decodedToken: any = jwt.verify(token as string, process.env.JWT_SECRET_TOKEN as string);
      const userId = decodedToken?.user?.id;
      if (!userId) {
        throw 'Unauthorized'
      }
  
      const user = await prisma.user.findFirst({where:{id:userId}})
  
      if (!user) {
        throw 'User not found'
      }
      return res.status(200).json(user);
    } catch (error) {
      console.error('Error:', error);
      return res.status(401).json({ error: error });
    }
  }

export default UserController