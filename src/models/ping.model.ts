import { Document, Schema, Model, model } from 'mongoose';

interface Ping extends Document {
    message: string;
}

const pingSchema: Schema = new Schema({
    message: String,
});

export const ping: Model<Ping> = model<Ping>('Ping', pingSchema);
