import express from "express";
import {firebaseAdmin} from "../..";
import {standardErrorRes} from "../../handleErrorRes";
export const getStorage = async (
    req: express.Request,
    res: express.Response,
) => {
  try {
    const {src} = req.body;
    const storage = firebaseAdmin.storage();
    const fileName = storage.bucket().file(src).name;
    const bucket = storage.bucket().name;
    const fullPath = fileName.split(`${bucket}/`)[1];
    // eslint-disable-next-line max-len
    res.send({data: {bucket, fullPath}, error: null, statusCode: res.statusCode});
  } catch (error) {
    standardErrorRes(res, error);
  }
};

export const getStorages = async (
    req: express.Request,
    res: express.Response,
) => {
  try {
    res.send("Get Storages");
  } catch (error) {
    standardErrorRes(res, error);
  }
};

export const postStorage = async (
    req: express.Request,
    res: express.Response,
) => {
  try {
    res.send("Post Storage");
  } catch (error) {
    res.status(400).send(error);
  }
};

export const putStorage = async (
    req: express.Request,
    res: express.Response,
) => {
  try {
    res.send("Put Storage");
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteStorage = async (
    req: express.Request,
    res: express.Response,
) => {
  try {
    res.send("Delete Storage");
  } catch (error) {
    res.status(400).send(error);
  }
};
