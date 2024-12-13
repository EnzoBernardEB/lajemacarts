import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { AutoMap } from '@automapper/classes';
import { ArtworkTypeEnum } from '../../domain/entities/artwork-type.enum';
import { ArtworkMaterialEnum } from '../../domain/entities/artwork-material.enum';

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
  type!: ArtworkTypeEnum;

  @AutoMap()
  @Column()
  availability!: boolean;

  @AutoMap()
  @Column()
  photo!: string;

  @AutoMap()
  @Column()
  material!: ArtworkMaterialEnum;

  @AutoMap()
  @Column()
  price!: number;
}
