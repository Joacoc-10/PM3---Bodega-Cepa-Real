import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User.entity";

@Entity({
  name: "credentials",
})
export class Credential {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 100, unique: true, nullable: false })
  username: string;

  @Column({ type: "varchar", length: 100, nullable: false })
  password: string;

  @OneToOne(() => User)
  user: User;

  @CreateDateColumn()
  createAt?: Date;

  @CreateDateColumn()
  updateAt?: Date;
}
