import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";

export class CreateComplimentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {tag_id, user_sender, user_receiver, message} = request.body;

    const createComplimentService = new CreateComplimentService();

    const compliment = await createComplimentService.execute({tag_id, user_sender, user_receiver, message});

    return response.status(201).json(compliment);
  }
}