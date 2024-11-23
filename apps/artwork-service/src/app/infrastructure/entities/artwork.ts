import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { ArtworkType } from '../../domain/enums/artwork-type';
import { ArtworkMaterial } from '../../domain/enums/artwork-material';
import { AutoMap } from '@automapper/classes';

@Entity()
@Unique(['title'])
export class ArtworkEntity {
  @AutoMap()
  @PrimaryGeneratedColumn()
  id!: number;

  @AutoMap()
  @Column()
  title!: string;

  @AutoMap()
  @Column()
  description!: string;

  @AutoMap()
  @Column()
  type!: ArtworkType;

  @AutoMap()
  @Column()
  availability!: boolean;

  @AutoMap()
  @Column()
  photo!: string;

  @AutoMap()
  @Column()
  material!: ArtworkMaterial;

  @AutoMap()
  @Column()
  price!: number;
}
