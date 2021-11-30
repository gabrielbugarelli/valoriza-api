import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

export const router = Router();
const createUserController = new CreateUserController();
const createTagControlller = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();

router.post('/tags', ensureAdmin, createTagControlller.handle);
router.post('/users', createUserController.handle);
router.post('/login', authenticateUserController.handle);