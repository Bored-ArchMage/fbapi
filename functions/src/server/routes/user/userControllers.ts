import express from "express";
import {firebaseAdmin} from "../..";
import {standardErrorRes} from "../../handleErrorRes";
export const userRegister = async (
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

export const userLogin = async (
    req: express.Request,
    res: express.Response,
) => {
  try {
    res.send("Login");
  } catch (error) {
    standardErrorRes(res, error);
  }
};

export const userDelete = async (
    req: express.Request,
    res: express.Response,
) => {
  try {
    const {uid} = req.body;
    await firebaseAdmin.firestore().collection("users").doc(uid).delete();
    res.send({data: "user deleted", statusCode: res.statusCode, error: null});
  } catch (error) {
    standardErrorRes(res, error);
  }
};
