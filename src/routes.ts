import { Router } from "express";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";

export const router = Router();
const createUserController = new CreateUserController();
const createTagControlller = new CreateTagController();

router.post('/users', createUserController.handle);
router.post('/tags', createTagControlller.handle);