// /app/presentation/dtos/update-artwork.dto.ts

import { PartialType } from '@nestjs/swagger';
import { CreateArtworkDto } from './create-artwork.dto';

export class UpdateArtworkDto extends PartialType(CreateArtworkDto) {}
