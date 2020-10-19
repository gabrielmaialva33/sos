import { Entity, Column, CreateDateColumn, PrimaryColumn } from 'typeorm';

@Entity('professionals')
export default class Professional {
  @PrimaryColumn('')
  id: string;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 100 })
  email: string;

  @Column({ type: 'varchar', length: 11 })
  whatsapp: string;

  @Column({ type: 'varchar', length: 50 })
  knowledges: string[];

  @Column({ type: 'text' })
  bio: string;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @CreateDateColumn({ name: 'updated_at' })
  updated_at: Date;
}
