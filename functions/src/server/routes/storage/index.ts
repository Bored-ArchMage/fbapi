import express from "express";
import {
  deleteStorage,
  getStorage,
  getStorages,
  postStorage,
  putStorage,
} from "./storageControllers";

// eslint-disable-next-line new-cap
const storageRouter: express.IRouter = express.Router();
storageRouter.route("/")
    .post((req: express.Request, res: express.Response) => {
      postStorage(req, res);
    })
    .put((req: express.Request, res: express.Response) => {
      putStorage(req, res);
    })
    .delete((req: express.Request, res: express.Response) => {
      deleteStorage(req, res);
    });

storageRouter.route("/getStorage")
    .post((req: express.Request, res: express.Response) => {
      getStorage(req, res);
    });
storageRouter.route("/getStorages")
    .post((req: express.Request, res: express.Response) => {
      getStorages(req, res);
    });
export default storageRouter;
