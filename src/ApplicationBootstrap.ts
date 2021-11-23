import express from "express";
import "reflect-metadata";
import { router } from "./routes";
import "./database";

const applicationBootstrap = express();
const PORT = 8080;

applicationBootstrap.use(express.json());

applicationBootstrap.use(router);

applicationBootstrap.use(express.json());

applicationBootstrap.listen(PORT, () => {
  console.log(`Application started on port: ${PORT}`);
});