import express from "express";
import "reflect-metadata";
import "./database";

const applicationBootstrap = express();
const PORT = 8080;

applicationBootstrap.use(express.json());

applicationBootstrap.listen(PORT, () => {
  console.log(`Application started on port: ${PORT}`);
})