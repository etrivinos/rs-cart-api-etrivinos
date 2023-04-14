import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export type CartStatusType = "OPEN" | "ORDERED";

@Entity()
export class Carts {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({
    type: "enum",
    enum: ["OPEN", "ORDERED"],
    default: "OPEN"
  })
  status: CartStatusType;
}