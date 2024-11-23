import { Module } from '@nestjs/common';
import { ArtworkController } from '../controllers/artwork.controller';
import { ArtworkRepositoryImpl } from '../../infrastructure/repositories/artwork.repository.impl';
import { ArtworkRepository } from '../../domain/repositories/artwork.repository';
import { CreateArtworkUseCase } from '../../domain/usecases/create-artwork.usecase';
import { GetAllArtworksUseCase } from '../../domain/usecases/get-all-artworks.usecase';
import { GetArtworkByIdUseCase } from '../../domain/usecases/get-artwork-by-id.usecase';
import { UpdateArtworkUseCase } from '../../domain/usecases/update-artwork.usecase';
import { DeleteArtworkUseCase } from '../../domain/usecases/delete-artwork.usecase';
import { CreateArtworkUseCaseImpl } from '../usescases/create-artwork.usecase.impl';
import { GetAllArtworksUseCaseImpl } from '../usescases/get-all-artworks.usecase.impl';
import { GetArtworkByIdUseCaseImpl } from '../usescases/get-artwork-by-id.usecase.impl';
import { UpdateArtworkUseCaseImpl } from '../usescases/update-artwork.usecase.impl';
import { DeleteArtworkUseCaseImpl } from '../usescases/delete-artwork.usecase.impl';
import { ArtworkEntity } from '../../infrastructure/entities/artwork';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  controllers: [ArtworkController],
  imports: [TypeOrmModule.forFeature([ArtworkEntity])],
  providers: [
    {
      provide: ArtworkRepository,
      useClass: ArtworkRepositoryImpl,
    },
    {
      provide: CreateArtworkUseCase,
      useClass: CreateArtworkUseCaseImpl,
    },
    {
      provide: GetAllArtworksUseCase,
      useClass: GetAllArtworksUseCaseImpl,
    },
    {
      provide: GetArtworkByIdUseCase,
      useClass: GetArtworkByIdUseCaseImpl,
    },
    {
      provide: UpdateArtworkUseCase,
      useClass: UpdateArtworkUseCaseImpl,
    },
    {
      provide: DeleteArtworkUseCase,
      useClass: DeleteArtworkUseCaseImpl,
    },
  ],
})
export class ArtworkModule {}
