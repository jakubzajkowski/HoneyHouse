import { Request, Response } from 'express';
import prisma from '../prisma/db';

interface DeleteCartControllerBodyType {
    id: string
}

const DeleteCartController = async (req:Request,res:Response)=>{
    const {id}:DeleteCartControllerBodyType=req.body
    try{
        await prisma.cart.delete({where:{id:id}})
        return res.status(200).json({Success: 'Deleted from cart'})
    }
    catch(e){
        res.status(404).json({error: e})
    }
}

export default DeleteCartController