import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, unique: true, length: 16 })
    username: string;

    @Column({ nullable: false, length: 18 })
    password: string;
}
// # 用户标识符，自增从 1 开始
// id: number, not null + primary key
// # 用户名称，不允许空格，只允许 a-zA-Z0-9（前后端同时检查），字符长度不超过 16，不允许重复，最少字符为 5
// username: string, not null + unique
// # 密码，不允许空格，只允许 a-zA-Z0-9（前后端同时检查），字符长度不超过 16，最少字符为8
// passwsord: string, not null + unique
