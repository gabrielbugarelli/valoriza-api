import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export const ensureAuthenticated = (request: Request, response: Response, next: NextFunction) => {
  const authToken = request.headers.authorization;

  if(!authToken) {
    return response.status(401).end();
  }

  const [, token] = authToken.split(' ');

  try{
    const {sub} = verify(token, "599a7d44df15442cc1fbadf9b86d13a7") as IPayload;
    request.user_id = sub;

    return next();
  } catch(error) {
    return response.status(401).end();
  }
}