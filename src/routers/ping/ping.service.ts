import { Mongoose } from 'mongoose';

export default {
    ping(): object {
        return { message: 'pong!' };
    },
    pingDatabase(mongoose: Mongoose): object {
        const isReady: number = mongoose.connection.readyState;
        return { ready: isReady === 1 };
    },
};
