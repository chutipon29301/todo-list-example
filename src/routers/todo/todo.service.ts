import { Model } from 'mongoose';
import { Todo } from '../../models/todo.model';
import { partialOf } from '../utils/objectMapper';

export interface CreateTodo {
    topic: string;
    description: string;
    dueDate: Date;
}
export default {
    async create(todoModel: Model<Todo>, todoInterface: CreateTodo) {
        const todo = new todoModel({...todoInterface, status: 'todo'});
        await todo.save();
    },
};
