import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn 
} from "typeorm";

@Entity({ name: 'todos' })
export class TodoEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    task: string;

    @Column({ name: 'is_done', type: 'tinyint', width: 1 })
    isDone: number;

    @CreateDateColumn({ name: 'created_at' })
    createdAT: string;
    
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAT: string;
}