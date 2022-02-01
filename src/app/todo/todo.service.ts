import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoEntity } from './entity/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(TodoEntity)
        private readonly todoEntity:  Repository<TodoEntity>
        ){}

        async findAll(){
            return await this.todoEntity.find()
        }

        async findOne(id: string){
            const index = await this.todoEntity.findOne(id)
            if(index) {
                return index;
            }
            throw new NotFoundException(`Id: ${id} não encontrado`)
        }

        async create(createTodoDto: CreateTodoDto){
            return await this.todoEntity.save(this.todoEntity.create(createTodoDto))
        }

        async update(id: string, data: UpdateTodoDto){
            const todoId = await this.todoEntity.findOne(id)
            if(todoId) {
                this.todoEntity.merge(todoId, data)
                return await this.todoEntity.save(todoId);
            }
            throw new NotFoundException(`Todo com Id: ${todoId} não foi encontrado`)
        }

        async delete(id: string){
            const index = await this.todoEntity.findOne(id)
            if(index) {
                return await this.todoEntity.remove(index);
            }
            throw new NotFoundException(`Todo com Id: ${index} não foi encontrado`)
        }
}
