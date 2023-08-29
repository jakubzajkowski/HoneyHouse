import express, { Express, Request, Response } from 'express';
import prisma from '../prisma/db';

const CategoryController =async (req:Request,res:Response)=>{
    try{
        if (req.params.category) {
            const Products = await prisma.products.findMany({where: {category: req.params.category}})
            if (Products){
                return res.status(200).json(Products)
            }
            else{
                throw "Products not found"
            }   
        }
    }
    catch(e){
        res.status(404).json({error: e})
    }
}

export default CategoryController