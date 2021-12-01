import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { TagEntity } from "./TagEntity";
import { UserEntity } from "./UserEntity";

@Entity('compliments')
export class ComplimentEntity {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  user_sender: string

  @JoinColumn({name: 'user_sender'})
  @ManyToOne(() => UserEntity)
  userSender: UserEntity;

  @Column()
  user_receiver: string;

  @JoinColumn({name: 'user_receiver'})
  @ManyToOne(() => UserEntity)
  userReceiver: UserEntity;

  @Column('tag_id')
  tag_id: string;

  @JoinColumn({name: 'tag_id'})
  @ManyToOne(() => TagEntity)
  tag: TagEntity;

  @Column()
  message: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuidV4();
    }
  }
}