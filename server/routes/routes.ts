import express, { Express, Request, Response } from 'express';
import ProductsController from '../controllers/ProductsController';
import CategoryController from '../controllers/CategoryController';

const api = express.Router();

api.get('/products', ProductsController)
api.get('/products/:category', CategoryController)

export default api