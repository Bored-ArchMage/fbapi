import express from "express";

export const standardErrorRes = (res: express.Response, error: unknown) => {
  res.status(res.statusCode).send({
    data: null,
    error: JSON.stringify(error),
    statusCode: res.statusCode,
  });
};
