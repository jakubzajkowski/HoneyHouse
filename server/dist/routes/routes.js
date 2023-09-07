"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ProductsController_1 = __importDefault(require("../controllers/ProductsController"));
const CategoryController_1 = __importDefault(require("../controllers/CategoryController"));
const ProductController_1 = __importDefault(require("../controllers/ProductController"));
const RegisterController_1 = __importDefault(require("../controllers/RegisterController"));
const LoginController_1 = __importDefault(require("../controllers/LoginController"));
const Auth_1 = require("../middlewares/Auth");
const UserController_1 = __importDefault(require("../controllers/UserController"));
const AddCartController_1 = __importDefault(require("../controllers/AddCartController"));
const CartController_1 = __importDefault(require("../controllers/CartController"));
const DeleteCartController_1 = __importDefault(require("../controllers/DeleteCartController"));
const api = express_1.default.Router();
api.get('/products', ProductsController_1.default);
api.get('/products/:category', CategoryController_1.default);
api.get('/product/:id', ProductController_1.default);
api.post('/register', RegisterController_1.default);
api.post('/login', LoginController_1.default);
api.post('/add-cart', AddCartController_1.default);
api.get('/user', Auth_1.Auth, UserController_1.default);
api.get('/cart/:id', CartController_1.default);
api.delete('/delete-cart', DeleteCartController_1.default);
exports.default = api;
