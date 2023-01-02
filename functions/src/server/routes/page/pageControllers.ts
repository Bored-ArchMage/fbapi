import express from "express";
import {firebaseAdmin} from "../..";
import {standardErrorRes} from "../../handleErrorRes";
export const getPage = async (
    req: express.Request,
    res: express.Response,
) => {
  try {
    const {userId, pageId} = req.body;
    const data = firebaseAdmin.firestore()
        .collection("workspaces/" + userId + "/pages/")
        .where("id", "==", pageId)
        .get()
        .then((res) => {
          res.forEach((doc) => {
            return doc.data();
          });
        })
        .catch((error) => {
          standardErrorRes(res, error);
        });
    const page = await data;
    res.send({data: page, error: null, statusCode: res.statusCode});
  } catch (error) {
    standardErrorRes(res, error);
  }
};

export const getPages = async (
    req: express.Request,
    res: express.Response,
) => {
  try {
    res.send("Get Pages");
  } catch (error) {
    standardErrorRes(res, error);
  }
};

export const postPage = async (
    req: express.Request,
    res: express.Response,
) => {
  try {
    res.send("Post Page");
  } catch (error) {
    standardErrorRes(res, error);
  }
};

export const putPage = async (
    req: express.Request,
    res: express.Response,
) => {
  try {
    res.send("Put Usa");
  } catch (error) {
    standardErrorRes(res, error);
  }
};

export const deletePage = async (
    req: express.Request,
    res: express.Response,
) => {
  try {
    res.send("Delete Usa");
  } catch (error) {
    standardErrorRes(res, error);
  }
};
