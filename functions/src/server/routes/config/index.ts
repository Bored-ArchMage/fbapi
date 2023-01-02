import express from "express";
import {
  deleteConfig,
  getConfig,
  getConfigs,
  postConfig,
  putConfig,
} from "./configController";


// eslint-disable-next-line new-cap
const configRouter: express.IRouter = express.Router();
configRouter.route("/")
    .post((req: express.Request, res: express.Response) => {
      postConfig(req, res);
    })
    .put((req: express.Request, res: express.Response) => {
      putConfig(req, res);
    })
    .delete((req: express.Request, res: express.Response) => {
      deleteConfig(req, res);
    });

configRouter.route("/getConfig")
    .post((req: express.Request, res: express.Response) => {
      getConfig(req, res);
    });
configRouter.route("/getConfigs")
    .post((req: express.Request, res: express.Response) => {
      getConfigs(req, res);
    });
export default configRouter;
