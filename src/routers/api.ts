import express from "express";

import clientErrorMiddleware from "../middlewares/clientError";
import serverErrorMiddleware from "../middlewares/serverError";
import notFoundErrorMiddleware from "../middlewares/notFoundError";
// import authenticatedMiddleware from "../middlewares/authenticated";
// import authorizedMiddleware from "../middlewares/authorized";

import servicesRouter from "./api/services-router";
import coreRouter from "./api/core-router";
import keysRouter from "./api/keys-router";
import userRouter from "./api/user-router";
import nodeRouter from "./api/node-router";
import dhtRouter from "./api/dht-router";
import configRouter from "./api/config-router";

const router = express.Router();

router.get("/", (req, res) => res.json({ status: "ok 1" }));
router.get("/info", (req, res) => res.json({ status: "ok 2" }));

router.use("/services", servicesRouter);
router.use("/core", coreRouter);
router.use("/keys", keysRouter);
router.use("/user", userRouter);
router.use("/node", nodeRouter);
router.use("/dht", dhtRouter);
router.use("/config", configRouter);

router.use(clientErrorMiddleware);
router.use(serverErrorMiddleware);
router.use(notFoundErrorMiddleware);

export default router;
