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
        const todo = new todoModel({ ...todoInterface, status: 'todo' });
        await todo.save();
    },
    async list(todoModel: Model<Todo>): Promise<Todo[]> {
        return await todoModel.find();
    },
    async edit(
        todoModel: Model<Todo>,
        id: string,
        partialTodoInterface: Partial<Todo>,
    ) {
        await todoModel.updateOne(
            { _id: id },
            { $set: partialOf<Todo>(partialTodoInterface) },
        );
    },
    async delete(todoModel: Model<Todo>, id: string) {
        await todoModel.deleteOne({ _id: id });
    },
};
