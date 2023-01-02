import express from "express";
import {firebaseAdmin} from "../..";
import {standardErrorRes} from "../../handleErrorRes";
export const getTemplate = async (
    req: express.Request,
    res: express.Response,
) => {
  try {
    const {
      userId,
      templateId,
      projectId,
    } = req.body;
    const template = await firebaseAdmin
        .firestore().collection("workspaces/" + userId + "/templates/")
        .where("handle", "==", templateId)
        .where("project_id", "==", projectId)
        .get()
        .then((res) => {
          return res.docs[0].data();
        })
        .catch((error) => {
          standardErrorRes(res, error);
        });
    res.send({data: template, error: null, statusCode: res.statusCode});
  } catch (error) {
    standardErrorRes(res, error);
  }
};

export const getTemplates = async (
    req: express.Request,
    res: express.Response,
) => {
  try {
    const {userId} = req.body;
    const data = new Promise((resolve) => {
      const e: FirebaseFirestore.DocumentData[] = [];
      firebaseAdmin
          .firestore().collection("workspaces/" + userId + "/templates/")
          .get()
          .then((res) => {
            res.forEach((doc) => {
              e.push(doc.data());
            });
          })
          .then(() => {
            resolve(e);
          })
          .catch((error) => {
            standardErrorRes(res, error);
          });
    });
    const templates = await data;
    res.send({data: templates, error: null, statusCode: res.statusCode});
  } catch (error) {
    standardErrorRes(res, error);
  }
};

export const postTemplate = async (
    req: express.Request,
    res: express.Response,
) => {
  try {
    res.send("Post Template");
  } catch (error) {
    res.status(400).send(error);
  }
};

export const putTemplate = async (
    req: express.Request,
    res: express.Response,
) => {
  try {
    res.send("Put Template");
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteTemplate = async (
    req: express.Request,
    res: express.Response,
) => {
  try {
    res.send("Delete Template");
  } catch (error) {
    res.status(400).send(error);
  }
};
