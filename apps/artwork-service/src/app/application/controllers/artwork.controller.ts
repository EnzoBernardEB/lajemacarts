// app/application/controllers/artwork.controller.ts

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreateArtworkDto } from '../dtos/create-artwork.dto';
import { UpdateArtworkDto } from '../dtos/update-artwork.dto';
import { ArtworkDto } from '../dtos/artwork.dto';
import { CreateArtworkUseCase } from '../../domain/usecases/create-artwork.usecase';
import { GetAllArtworksUseCase } from '../../domain/usecases/get-all-artworks.usecase';
import { GetArtworkByIdUseCase } from '../../domain/usecases/get-artwork-by-id.usecase';
import { UpdateArtworkUseCase } from '../../domain/usecases/update-artwork.usecase';
import { DeleteArtworkUseCase } from '../../domain/usecases/delete-artwork.usecase';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { Artwork } from '../../domain/entities/artwork.entity';

@ApiTags('artworks')
@Controller('artworks')
export class ArtworkController {
  constructor(
    private readonly createArtworkUseCase: CreateArtworkUseCase,
    private readonly getAllArtworksUseCase: GetAllArtworksUseCase,
    private readonly getArtworkByIdUseCase: GetArtworkByIdUseCase,
    private readonly updateArtworkUseCase: UpdateArtworkUseCase,
    private readonly deleteArtworkUseCase: DeleteArtworkUseCase,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Get all artworks' })
  @ApiResponse({ status: 200, description: 'Returns all artworks.', type: [ArtworkDto] })
  findAll(): Observable<ArtworkDto[]> {
    return this.getAllArtworksUseCase.getAll().pipe(
      map((artworks) => this.mapper.mapArray(artworks, ArtworkDto, Artwork)),
    );
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an artwork by ID' })
  @ApiResponse({ status: 200, description: 'Returns the requested artwork.', type: ArtworkDto })
  findOne(@Param('id') id: number): Observable<ArtworkDto> {
    return this.getArtworkByIdUseCase.getById(id).pipe(
      map((artwork) => this.mapper.map(artwork, ArtworkDto, Artwork)),
    );
  }

  @Post()
  @ApiOperation({ summary: 'Create a new artwork' })
  @ApiResponse({ status: 201, description: 'The artwork has been successfully created.', type: CreateArtworkDto })
  @ApiBody({ type: CreateArtworkDto })
  create(@Body() createArtworkDto: CreateArtworkDto): Observable<CreateArtworkDto> {
    const artwork = this.mapper.map(createArtworkDto, CreateArtworkDto, Artwork);
    return this.createArtworkUseCase.create(artwork).pipe(
      map((createdArtwork) => this.mapper.map(createdArtwork, ArtworkDto, CreateArtworkDto)),
    );
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an artwork' })
  @ApiResponse({ status: 200, description: 'The artwork has been successfully updated.', type: UpdateArtworkDto })
  update(
    @Param('id') id: number,
    @Body() updateArtworkDto: UpdateArtworkDto,
  ): Observable<UpdateArtworkDto> {
    const artwork = this.mapper.map(updateArtworkDto, UpdateArtworkDto, Artwork);
    return this.updateArtworkUseCase.update(id, artwork).pipe(
      map((updatedArtwork) => this.mapper.map(updatedArtwork, ArtworkDto, Artwork)),
    );
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an artwork' })
  @ApiResponse({ status: 200, description: 'The artwork has been successfully deleted.' })
  remove(@Param('id') id: number): Observable<void> {
    return this.deleteArtworkUseCase.delete(id);
  }
}
