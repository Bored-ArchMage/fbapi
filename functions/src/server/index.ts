import express from "express";
import * as admin from "firebase-admin";
// const credential = require("../key.json");
import serviceAccount from "../key.json";
import sceneRouter from "./routes/scenes";
import cors from "cors";
import templateRouter from "./routes/templates";
import assetRouter from "./routes/assets";
import usageRouter from "./routes/usages";
import pageRouter from "./routes/page";
import storageRouter from "./routes/storage";
import registerRouter from "./routes/auth";
import userRouter from "./routes/user";

export const firebaseAdmin = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  storageBucket: "badvisor.appspot.com",
});

const app: express.Application = express();

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use(cors());

// user api mounted
app.use("/api/v1/user", registerRouter);

// scene api mounted
app.use("/api/v1/scene", sceneRouter);

// template api mounted
app.use("/api/v1/template", templateRouter);

// asset api mounted
app.use("/api/v1/asset", assetRouter);

// usages api mounted
app.use("/api/v1/usage", usageRouter);

// page api mounted
app.use("/api/v1/page", pageRouter);

// storage api mounted
app.use("/api/v1/storage", storageRouter);

// user api mounted
app.use("/api/v1/IUser", userRouter);

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });
export default app;
