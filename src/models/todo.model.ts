import { Document, Schema, Model, model } from 'mongoose';

interface Todo extends Document {
    topic: string;
    description: string;
    dueDate: Date;
    status: string;
}

const todoSchema: Schema = new Schema({
    topic: String,
    description: String,
    dueDate: Date,
    status: String,
});

export const todo: Model<Todo> = model<Todo>('Todo', todoSchema);
