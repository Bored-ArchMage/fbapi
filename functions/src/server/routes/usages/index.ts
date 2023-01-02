import express from "express";
import {
  deleteUsage,
  getUsage,
  getUsages,
  getUserUsage,
  postUsage,
  putUsage,
} from "./usagesController";

// eslint-disable-next-line new-cap
const usageRouter: express.IRouter = express.Router();
usageRouter.route("/")
    .post((req: express.Request, res: express.Response) => {
      postUsage(req, res);
    })
    .put((req: express.Request, res: express.Response) => {
      putUsage(req, res);
    })
    .delete((req: express.Request, res: express.Response) => {
      deleteUsage(req, res);
    });

usageRouter.route("/getUsage")
    .post((req: express.Request, res: express.Response) => {
      getUsage(req, res);
    });
usageRouter.route("/getUsages")
    .post((req: express.Request, res: express.Response) => {
      getUsages(req, res);
    });

usageRouter.route("/getUserUsage")
    .post((req: express.Request, res: express.Response) => {
      getUserUsage(req, res);
    });
export default usageRouter;
