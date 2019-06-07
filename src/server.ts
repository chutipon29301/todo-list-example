import { createServer } from 'http';
import mongoose from 'mongoose';
import app from './app';

export const server = createServer(app);

(async () => {
    await server.listen(app.get('port'));
    console.log(
        `  App is running at http://localhost:${app.get('port')} in ${app.get(
            'env',
        )} mode`,
    );
    console.log('  Press CTRL-C to stop\n');

    try {
        await mongoose.connect('mongodb://localhost:27017/seating-backend', {
            useNewUrlParser: true,
        });
        console.log('  Database is connecting...\n');
    } catch (err) {
        console.error('  Cannot connect database, is `mongod` running?\n');
    }
})();
