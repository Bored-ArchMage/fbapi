import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import app from "./server";

export const badvisorApi = functions
    .runWith({minInstances: 1})
    .https
    .onRequest(app);

export const assetOnDelete = functions.firestore
    .document("workspaces/{userId}/assets/{assetId}")
    .onDelete((snap, context) => {
      return admin.storage()
          .bucket()
          .deleteFiles({
            prefix:
                  `workspaces/${context.params.userId
                  }/assets/${context.params.assetId}/asset`,
          });
    });

export const assetOnUpdate = functions.firestore
    .document("workspaces/{userId}/assets/{assetId}")
    .onUpdate(() => {
    //  console.log("updating asset");
    //  console.log(snap, context);
    // Get an object representing the document prior to deletion
    // e.g. {'name': 'Marie', 'age': 66}
    //  const deletedValue = snap.data();
    // perform desired operations ...
    });

app.listen(3002, () => {
  console.log("Server is running on port 3002");
});
