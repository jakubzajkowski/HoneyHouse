import express, { Router, Request, Response} from 'express';
import path from 'path';

const router:Router = express.Router();

const routes : string[] = ["/","/shop","/shop/product/*","/register","/login","/account","/checkout/*","/pictures"]

router.get(routes, (req : Request, res : Response) => {
    res.sendfile(path.join(__dirname, "../../build/index.html"))
  });

export default router