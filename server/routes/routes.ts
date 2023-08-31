import express, { Express, Request, Response } from 'express';
import ProductsController from '../controllers/ProductsController';
import CategoryController from '../controllers/CategoryController';
import ProductController from '../controllers/ProductController';

const api = express.Router();

api.get('/products', ProductsController)
api.get('/products/:category', CategoryController)
api.get('/products/:id', ProductController)

export default api