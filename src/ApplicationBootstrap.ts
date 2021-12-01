import express, { NextFunction, Request, Response } from "express";
import "reflect-metadata";
import { router } from "./routes";
import "express-async-errors";
import "./database";

const applicationBootstrap = express();
const PORT = 8080;

applicationBootstrap.use(express.json());

applicationBootstrap.use(router);

applicationBootstrap.use(express.json());

applicationBootstrap.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if(error instanceof Error) {
    return response.status(400).json({
      error: error.message
    })
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error'
  })
})

applicationBootstrap.listen(PORT, () => {
  console.log(`Application started on port: ${PORT}`);
}); 