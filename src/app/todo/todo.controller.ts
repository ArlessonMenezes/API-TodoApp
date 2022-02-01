import { Body, Controller, Delete, Get, HttpCode, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('api/v1/todos')
export class TodoController {
    constructor(
        private readonly todoService: TodoService
    ){}

    @Get()
    async index() {
        return await this.todoService.findAll()
    }

    @Post()
    async create(@Body() data: CreateTodoDto) {
        return await this.todoService.create(data);
    }

    @Get(':id')
    async show(@Param('id', new ParseUUIDPipe()) id: string) {
        return await this.todoService.findOne(id);
    }

    @Put(':id') 
    async update(@Param('id', new ParseUUIDPipe()) id: string, @Body() data: UpdateTodoDto) {
        return await this.todoService.update(id, data)
    }

    @Delete(':id')
    @HttpCode(204)
    async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
        await this.todoService.delete(id)
    }
}
