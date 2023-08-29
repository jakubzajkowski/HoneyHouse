import express, { Express, Request, Response } from 'express';
import prisma from '../prisma/db';

const ProductsController =async (req:Request,res:Response)=>{
    try{
        const Products = await prisma.products.findMany()
        if (Products){
            return res.status(200).json(Products)
        }
        else{
            throw "Products not found"
        }
    }
    catch(e){
        res.status(404).json({error: e})
    }
}

export default ProductsController