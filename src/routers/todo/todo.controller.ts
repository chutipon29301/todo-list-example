import { Router } from 'express';
import { asyncifyHandler } from '../utils/async-handler';
import { param, body, oneOf } from 'express-validator/check';
import { validateRequest } from '../utils/requestValidator';
import todoService from './todo.service';
import { todo } from '../../models/todo.model';

const router: Router = Router();

router.get(
    '/',
    asyncifyHandler(async (req, res) => {
        const todos = await todoService.list(todo);
        res.status(200).send({ todos });
    }),
);

export default router;
