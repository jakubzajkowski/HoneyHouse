"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = __importDefault(require("../prisma/db"));
const UserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.replace('Bearer ', '');
    try {
        const decodedToken = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET_TOKEN);
        const userId = (_b = decodedToken === null || decodedToken === void 0 ? void 0 : decodedToken.user) === null || _b === void 0 ? void 0 : _b.id;
        if (!userId) {
            throw 'Unauthorized';
        }
        const user = yield db_1.default.user.findFirst({ where: { id: userId } });
        if (!user) {
            throw 'User not found';
        }
        return res.status(200).json(user);
    }
    catch (error) {
        console.error('Error:', error);
        return res.status(401).json({ error: error });
    }
});
exports.default = UserController;
