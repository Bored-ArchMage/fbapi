import express from "express";
import {firebaseAdmin} from "../..";
import {standardErrorRes} from "../../handleErrorRes";
export const getAsset = async (
    req: express.Request,
    res: express.Response,
) => {
  try {
    const {userId, assetId} = req.body;
    const data = new Promise((resolve) => {
      firebaseAdmin.firestore().collection("workspaces/" + userId + "/assets/")
          .where("id", "==", assetId)
          .get()
          // eslint-disable-next-line max-len
          .then((refs: FirebaseFirestore.QuerySnapshot<FirebaseFirestore.DocumentData>) => {
            // eslint-disable-next-line max-len
            refs.forEach((item: FirebaseFirestore.QueryDocumentSnapshot<FirebaseFirestore.DocumentData>) => {
              resolve(item.data());
            });
          });
    });
    const asset = await data;
    res.send({data: asset, error: null, statusCode: res.statusCode});
  } catch (error) {
    standardErrorRes(res, error);
  }
};

export const getAssets = async (
    req: express.Request,
    res: express.Response,
) => {
  try {
    const {userId} = req.body;
    const data = new Promise((resolve) => {
      // eslint-disable-next-line max-len
      const array: FirebaseFirestore.DocumentData[] = [];
      firebaseAdmin.firestore().collection("workspaces/" + userId + "/assets/")
          .get()
          .then((refs) => {
            // eslint-disable-next-line max-len
            refs.forEach((item: FirebaseFirestore.QueryDocumentSnapshot<FirebaseFirestore.DocumentData>) => {
              array.push(item.data());
            });
            resolve(array);
          })
          .catch((error) => {
            standardErrorRes(res, error);
          });
    });
    const assets = await data;
    res.send({data: assets, error: null, statusCode: res.statusCode});
  } catch (error) {
    standardErrorRes(res, error);
  }
};

export const getAssetREF = async (
    req: express.Request,
    res: express.Response,
) => {
  try {
    const {userId, ref} = req.body;
    const data = await firebaseAdmin.firestore()
        .collection("workspaces/" + userId + "/assets/")
        .doc(ref)
        .get();
    const asset = data.data();
    res.send({data: asset, error: null, statusCode: res.statusCode});
  } catch (error) {
    standardErrorRes(res, error);
  }
};

export const postAsset = async (
    req: express.Request,
    res: express.Response,
) => {
  try {
    res.send("Post Asset");
  } catch (error) {
    standardErrorRes(res, error);
  }
};

export const putAsset = async (
    req: express.Request,
    res: express.Response,
) => {
  try {
    res.send("Put Asset");
  } catch (error) {
    standardErrorRes(res, error);
  }
};

export const deleteAsset = async (
    req: express.Request,
    res: express.Response,
) => {
  try {
    res.send("Delete Asset");
  } catch (error) {
    standardErrorRes(res, error);
  }
};
