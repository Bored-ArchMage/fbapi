import express from "express";
import {firebaseAdmin} from "../..";
import {standardErrorRes} from "../../handleErrorRes";
export const getUsage = async (
    req: express.Request,
    res: express.Response,
) => {
  try {
    res.send("get usages");
  } catch (error) {
    standardErrorRes(res, error);
  }
};

export const getUsages = async (
    req: express.Request,
    res: express.Response,
) => {
  try {
    res.send("Get Usages");
  } catch (error) {
    standardErrorRes(res, error);
  }
};

export const postUsage = async (
    req: express.Request,
    res: express.Response,
) => {
  try {
    const {userId, bytes} = req.body;
    const userData = await firebaseAdmin.firestore()
        .collection("usages").doc(userId).get();
    if (userData.data()) {
      res.status(500).send({
        error: null,
        statusCode: res.statusCode,
        data: "User Already Exists",
      });
    }
    await firebaseAdmin.firestore()
        .collection("usages")
        .doc(userId)
        .set({
          bytes: parseInt(bytes),
          visits: 1,
        });
    // eslint-disable-next-line max-len
    res.send({error: null, statusCode: res.statusCode, data: "User First Usage Saved Successfully"});
  } catch (error) {
    standardErrorRes(res, error);
  }
};

export const putUsage = async (
    req: express.Request,
    res: express.Response,
) => {
  try {
    const {userId, bytes, visits} = req.body;
    await firebaseAdmin.firestore()
        .collection("usages")
        .doc(userId)
        .set({
          bytes: bytes,
          visits: visits,
        });
    // eslint-disable-next-line max-len
    res.send({error: null, statusCode: res.statusCode, data: "User Usages Saved Successfully"});
  } catch (error) {
    standardErrorRes(res, error);
  }
};

export const deleteUsage = async (
    req: express.Request,
    res: express.Response,
) => {
  try {
    res.send("Delete Usa");
  } catch (error) {
    standardErrorRes(res, error);
  }
};

export const getUserUsage = async (
    req: express.Request,
    res: express.Response,
) => {
  try {
    const {userId} = req.body;
    const userData = firebaseAdmin
        .firestore()
        .collection("usages")
        .doc(userId)
        .get();
    const data = await userData;
    if (data.data()) {
      res.send({data: data.data(), error: null, statusCode: res.statusCode});
    } else {
      res.send({data: null, error: null, statusCode: res.statusCode});
    }
  } catch (error) {
    standardErrorRes(res, error);
  }
};

