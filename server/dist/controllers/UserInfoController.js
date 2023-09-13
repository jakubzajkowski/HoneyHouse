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
const UserInfoController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { first_name, last_name, email, country, address, apartament, postal_code, city, phone } = req.body;
    try {
        const user = yield db_1.default.user.findFirst({ where: { email: email } });
        console.log(user);
        yield db_1.default.user.update({ where: {
                email: email,
            },
            data: { first_name: first_name ? first_name : user === null || user === void 0 ? void 0 : user.first_name,
                last_name: last_name ? last_name : user === null || user === void 0 ? void 0 : user.last_name,
                email: email ? email : user === null || user === void 0 ? void 0 : user.email,
                country: country ? country : user === null || user === void 0 ? void 0 : user.country,
                address: address ? address : user === null || user === void 0 ? void 0 : user.address,
                apartament: apartament ? apartament : user === null || user === void 0 ? void 0 : user.apartament,
                postal_code: postal_code ? postal_code : user === null || user === void 0 ? void 0 : user.postal_code,
                city: city ? city : user === null || user === void 0 ? void 0 : user.city,
                phone: phone ? phone : user === null || user === void 0 ? void 0 : user.phone
            }
        });
        return res.status(200).json({ Success: 'Updated' });
    }
    catch (e) {
        res.status(404).json({ error: e });
    }
});
exports.default = UserInfoController;
