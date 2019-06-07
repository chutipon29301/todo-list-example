import { Router } from 'express';
import ping from './ping/ping.controller';

const router: Router = Router();

router.use('/ping', ping);

export default router;
