import express from "express";
import {firebaseAdmin} from "../..";
import {standardErrorRes} from "../../handleErrorRes";

// eslint-disable-next-line new-cap
const registerRouter: express.IRouter = express.Router();

registerRouter.route("/register")
    .post((req: express.Request, res: express.Response) => {
      userRegister(req, res);
    });
export default registerRouter;

const userRegister = async (
    req: express.Request,
    res: express.Response,
) => {
  try {
    const {email, password} = req.body;
    const user = await firebaseAdmin.auth().createUser({
      email,
      password,
    });
    res.send({error: null, statusCode: res.statusCode, data: user});
  } catch (error) {
    standardErrorRes(res, error);
  }
};

const getAuthToken = (req: express.Request) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    return req.headers.authorization.split(" ")[1];
  } else {
    return null;
  }
};

export const checkIfAuthenticated = async (
    req: express.Request,
    res: express.Response,
    next: () => null
) => {
  const authToken = getAuthToken(req);
  if (!authToken) {
    return res
        .status(401)
        .send({error: "You are not authorized to make this request"});
  }
  try {
    await firebaseAdmin
        .auth()
        .verifyIdToken(authToken);
    return next();
  } catch (e) {
    return res
        .status(401)
        .send({error: "You are not authorized to make this request"});
  }
};
