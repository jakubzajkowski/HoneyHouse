import express, { Router } from 'express';
import ProductsController from '../controllers/ProductsController';
import CategoryController from '../controllers/CategoryController';
import ProductController from '../controllers/ProductController';
import RegisterController from '../controllers/RegisterController';
import LoginController from '../controllers/LoginController';
import { Auth } from '../middlewares/Auth';
import UserController from '../controllers/UserController';

const api:Router = express.Router();

api.get('/products', ProductsController)
api.get('/products/:category', CategoryController)
api.get('/product/:id', ProductController)
api.post('/register', RegisterController)
api.post('/login', LoginController)
api.get('/user', Auth, UserController)

export default api