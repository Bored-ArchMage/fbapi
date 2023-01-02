import express from "express";
import {getAsset, getAssetREF, getAssets} from "./assetControllers";

// eslint-disable-next-line new-cap
const assetRouter: express.IRouter = express.Router();
assetRouter.route("/")
    .post((req: express.Request, res: express.Response) => {
      res.send("heyyyy");
    })
    .put((req: express.Request, res: express.Response) => {
      res.send("heyyy");
    })
    .delete((req: express.Request, res: express.Response) => {
      res.send("heyyy");
    });

assetRouter.route("/getAsset")
    .post((req: express.Request, res: express.Response) => {
      getAsset(req, res);
    });
assetRouter.route("/getAssetRef")
    .post((req: express.Request, res: express.Response) => {
      getAssetREF(req, res);
    });
assetRouter.route("/getAssets")
    .post((req: express.Request, res: express.Response) => {
      getAssets(req, res);
    });
export default assetRouter;
