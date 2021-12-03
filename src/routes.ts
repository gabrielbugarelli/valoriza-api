import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentRepository";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/EnsureAuthenticated";

export const router = Router();
const createUserController = new CreateUserController();
const createTagControlller = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

router.post('/tags', ensureAuthenticated, ensureAdmin, createTagControlller.handle);
router.post('/users', createUserController.handle);
router.post('/login', authenticateUserController.handle);
router.post('/compliments', ensureAuthenticated, createComplimentController.handle);