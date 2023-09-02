import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';


export const Auth = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
    try {
      if (!token) {
        throw 'Unauthorized'
      } else {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_TOKEN as string);
        if (decodedToken) {
          return next();
        } else {
            throw 'Unauthorized'
        }
      }
    } catch (error) {
      return res.status(401).json({ error: error});
    }
  }