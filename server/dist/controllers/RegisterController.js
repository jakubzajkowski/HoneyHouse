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
const db_1 = __importDefault(require("../prisma/db"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const RegisterController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const saltRounds = 10;
    const { first_name, last_name, email, password } = req.body;
    console.log(first_name, last_name, email, password);
    try {
        if (first_name && last_name && email && password) {
            const userUniqueCheck = yield db_1.default.user.findFirst({ where: { email: email } });
            if (!userUniqueCheck) {
                const hash = bcrypt_1.default.hashSync(password, saltRounds);
                yield db_1.default.user.create({ data: {
                        first_name,
                        last_name,
                        email,
                        password: hash,
                        country: "",
                        address: "",
                        apartament: "",
                        postal_code: "",
                        city: "",
                        phone: ""
                    }
                });
                res.status(200).json({ success: 'Register success' });
            }
            else
                throw "This email is already used!";
        }
        else
            throw "Fill all fields";
    }
    catch (e) {
        res.status(404).json({ error: e });
    }
});
exports.default = RegisterController;
