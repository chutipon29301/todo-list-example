import { Router } from 'express';
import { asyncifyHandler } from '../utils/async-handler';
import pingService from './ping.service';
import mongoose from 'mongoose';

const router: Router = Router();

router.get('/', (req, res) => {
    return res.send(pingService.ping());
});

router.get(
    '/db',
    asyncifyHandler(async (req, res) => {
        return res.send(await pingService.pingDatabase(mongoose));
    }),
);

export default router;
