import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ArtworkModule } from './application/modules/artwork.module';
import { AutoMapperModule } from './application/modules/automapper.module';
import { ArtworkEntity } from './infrastructure/entities/artwork';

@Module({
  imports: [
    AutoMapperModule,
    // Charge les variables d'environnement depuis le fichier .env
    ConfigModule.forRoot({
      isGlobal: true, // Rend le ConfigService accessible dans toute l'use-cases
    }),
    // Configuration asynchrone de TypeOrmModule
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [ArtworkEntity],
        synchronize: true,
      }),
    }),
    ArtworkModule,
  ],
})
export class AppModule {}
