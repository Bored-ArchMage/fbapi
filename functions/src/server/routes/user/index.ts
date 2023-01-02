import express from "express";
import {
  userDelete,
  userLogin,
  userRegister,
} from "./userControllers";

// eslint-disable-next-line new-cap
const userRouter: express.IRouter = express.Router();

userRouter.route("/register")
    .post((req: express.Request, res: express.Response) => {
      userRegister(req, res);
    });


userRouter.route("/login")
    .post((req: express.Request, res: express.Response) => {
      userLogin(req, res);
    });

userRouter.route("/delete")
    .post((req: express.Request, res: express.Response) => {
      userDelete(req, res);
    });

export default userRouter;
