import express, { Express, Request, Response } from 'express';
import prisma from '../prisma/db';

const ProductController = async (req:Request,res:Response)=>{
    try{
        if (req.params.id) {
            const Product = await prisma.products.findFirst({where: {id: req.params.id}})
            if (Product){
                return res.status(200).json(Product)
            }
            else{
                throw "Product not found"
            }   
        }
        else{
            throw "Invalid id"
        }
    }
    catch(e){
        res.status(404).json({error: e})
    }
}

export default ProductController