"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const router = express_1.default.Router();
const routes = ["/", "/shop", "/shop/product/*", "/register", "/login", "/account", "/checkout/*", "/pictures"];
router.get(routes, (req, res) => {
    res.sendfile(path_1.default.join(__dirname, "../../build/index.html"));
});
exports.default = router;
