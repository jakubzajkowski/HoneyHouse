import { Request, Response } from 'express';
import prisma from '../prisma/db';
import jwt from 'jsonwebtoken';

const CartController = async (req:Request,res:Response)=>{
    const token = req.headers.authorization?.replace('Bearer ', '');
    try{
            const decodedToken: any = jwt.verify(token as string, process.env.JWT_SECRET_TOKEN as string);
            const userId = decodedToken?.user?.id;
            const Cart = await prisma.cart.findMany({where:{userId: userId}})
            const CartResponse = await Promise.all(Cart.map(async (item) => {
                const product =  await prisma.products.findFirst({where:{id:item.product_id}}) 
                return {...item,
                    img: product?.img,
                    name:product?.name,
                    desc:product?.desc,
                    weight: product?.weight
                }
            }
            ));
            if (Cart){
                return res.status(200).json(CartResponse)
            }
            else{
                throw "Cart not found"
            }   
    }
    catch(e){
        res.status(404).json({error: e})
    }
}

export default CartController