import express from "express";
import {
  deletePage,
  getPage,
  getPages,
  postPage,
  putPage,
} from "./pageControllers";


// eslint-disable-next-line new-cap
const pageRouter: express.IRouter = express.Router();
pageRouter.route("/")
    .post((req: express.Request, res: express.Response) => {
      postPage(req, res);
    })
    .put((req: express.Request, res: express.Response) => {
      putPage(req, res);
    })
    .delete((req: express.Request, res: express.Response) => {
      deletePage(req, res);
    });

pageRouter.route("/getPage")
    .post((req: express.Request, res: express.Response) => {
      getPage(req, res);
    });
pageRouter.route("/getPages")
    .post((req: express.Request, res: express.Response) => {
      getPages(req, res);
    });
export default pageRouter;
