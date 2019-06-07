import { Router } from 'express';
import { asyncifyHandler } from '../utils/async-handler';
import { param, body, oneOf } from 'express-validator/check';
import { validateRequest } from '../utils/requestValidator';
import todoService from './todo.service';
import { todo } from '../../models/todo.model';

const router: Router = Router();


export default router;
