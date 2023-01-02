import express from "express";
import {firebaseAdmin} from "../..";
import {standardErrorRes} from "../../handleErrorRes";
export const getScene = async (
    req: express.Request,
    res: express.Response,
) => {
  try {
    const {
      userId,
      sceneId,
      projectId,
    } = req.body;
    const scene = await firebaseAdmin
        .firestore().collection("workspaces/" + userId + "/scenes/")
        .where("handle", "==", sceneId)
        .where("project_id", "==", projectId)
        .get()
        .then((res) => {
          return res.docs[0].data();
        })
        .catch((error) => {
          standardErrorRes(res, error);
        });
    res.send({data: scene, error: null, statusCode: res.statusCode});
  } catch (error) {
    standardErrorRes(res, error);
  }
};

export const getScenes = async (
    req: express.Request,
    res: express.Response,
) => {
  try {
    const {userId} = req.body;
    const data = new Promise((resolve) => {
      const e: FirebaseFirestore.DocumentData[] = [];
      firebaseAdmin
          .firestore().collection("workspaces/" + userId + "/scenes/")
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
    const scenes = await data;
    res.send({data: scenes, error: null, statusCode: res.statusCode});
  } catch (error) {
    standardErrorRes(res, error);
  }
};

export const postScene = async (
    req: express.Request,
    res: express.Response,
) => {
  try {
    res.send("Post Scene");
  } catch (error) {
    res.status(400).send(error);
  }
};

export const putScene = async (
    req: express.Request,
    res: express.Response,
) => {
  try {
    res.send("Put Scene");
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteScene = async (
    req: express.Request, res: express.Response
) => {
  try {
    res.send( "Delete Scene" );
  } catch ( error ) {
    res.status( 400 ).send( error );
  }
};
