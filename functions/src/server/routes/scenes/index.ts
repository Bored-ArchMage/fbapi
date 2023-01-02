import express from "express";
import {
  deleteScene,
  getScene,
  getScenes,
  postScene,
  putScene,
} from "./sceneControllers";

// eslint-disable-next-line new-cap
const sceneRouter: express.IRouter = express.Router();
sceneRouter.route("/")
    .post((req: express.Request, res: express.Response) => {
      postScene(req, res);
    })
    .put((req: express.Request, res: express.Response) => {
      putScene(req, res);
    })
    .delete((req: express.Request, res: express.Response) => {
      deleteScene(req, res);
    });

sceneRouter.route("/getScene")
    .post((req: express.Request, res: express.Response) => {
      getScene(req, res);
    });
sceneRouter.route("/getScenes")
    .post((req: express.Request, res: express.Response) => {
      getScenes(req, res);
    });
export default sceneRouter;
