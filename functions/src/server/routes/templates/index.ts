import express from "express";
import {
  deleteTemplate,
  getTemplate,
  getTemplates,
  postTemplate,
  putTemplate,
} from "./templateControllers";

// eslint-disable-next-line new-cap
const templateRouter: express.IRouter = express.Router();
templateRouter.route("/")
    .post((req: express.Request, res: express.Response) => {
      postTemplate(req, res);
    })
    .put((req: express.Request, res: express.Response) => {
      putTemplate(req, res);
    })
    .delete((req: express.Request, res: express.Response) => {
      deleteTemplate(req, res);
    });

templateRouter.route("/getTemplate")
    .post((req: express.Request, res: express.Response) => {
      getTemplate(req, res);
    });
templateRouter.route("/getTemplates")
    .post((req: express.Request, res: express.Response) => {
      getTemplates(req, res);
    });
export default templateRouter;
