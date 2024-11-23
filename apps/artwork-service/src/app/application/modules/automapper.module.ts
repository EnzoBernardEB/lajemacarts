import { Module } from '@nestjs/common';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { ArtworkProfile } from '../profiles/artwork.profile';

@Module({
  imports: [
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
  ],
  providers: [ArtworkProfile],
  exports: [AutomapperModule],
})
export class AutoMapperModule {}
