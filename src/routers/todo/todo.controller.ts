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

router.post(
    '/',
    body('topic').isString(),
    body('description').isString(),
    body('dueDate').isISO8601(),
    validateRequest,
    asyncifyHandler(async (req, res) => {
        await todoService.create(todo, {
            topic: req.body.topic,
            description: req.body.description,
            dueDate: req.body.dueDate,
        });
        res.sendStatus(201);
    }),
);
export default router;
