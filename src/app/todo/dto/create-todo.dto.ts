import { IsIn, IsNotEmpty, IsString } from "class-validator";

export class CreateTodoDto{
    @IsString()
    @IsNotEmpty()
    task: string;

    @IsIn([0, 1])
    @IsNotEmpty()
    isDone: number;
}