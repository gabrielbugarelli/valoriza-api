import { Router } from "express";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

export const router = Router();
const createUserController = new CreateUserController();
const createTagControlller = new CreateTagController();

router.post('/tags', ensureAdmin, createTagControlller.handle);
router.post('/users', createUserController.handle);