import express from "express";
import {firebaseAdmin} from "../..";
import {standardErrorRes} from "../../handleErrorRes";
export const getConfig = async (
    req: express.Request,
    res: express.Response,
) => {
  try {
    const {id} = req.body;
    const config = await firebaseAdmin.firestore()
        .collection("configs")
        .doc(id)
        .get();
    res.send({error: null, statusCode: res.statusCode, data: config.data()});
  } catch (error) {
    standardErrorRes(res, error);
  }
};

export const getConfigs = async (
    req: express.Request,
    res: express.Response,
) => {
  try {
    res.send("Get Configs");
  } catch (error) {
    standardErrorRes(res, error);
  }
};

export const postConfig = async (
    req: express.Request,
    res: express.Response,
) => {
  try {
    const {config} = req.body;
    await firebaseAdmin.firestore()
        .collection("configs")
        .add({
          data: config,
        });
    // eslint-disable-next-line max-len
    res.send({error: null, statusCode: res.statusCode, data: "Config Saved Successfully"});
  } catch (error) {
    standardErrorRes(res, error);
  }
};

export const putConfig = async (
    req: express.Request,
    res: express.Response,
) => {
  try {
    res.send("Put config");
  } catch (error) {
    standardErrorRes(res, error);
  }
};

export const deleteConfig = async (
    req: express.Request,
    res: express.Response,
) => {
  try {
    res.send("Delete config");
  } catch (error) {
    standardErrorRes(res, error);
  }
};
