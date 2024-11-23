import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env['DB_HOST'] || 'localhost',  // Utilisation de localhost par défaut
  port: parseInt(process.env['DB_PORT'] || '3306', 10),  // Utilisation de 3306 par défaut
  username: process.env['DB_USERNAME'] || 'root',  // Utilisation de 'root' comme utilisateur par défaut
  password: process.env['DB_PASSWORD'] || '',  // Pas de mot de passe par défaut, préférable pour dev local
  database: process.env['DB_DATABASE'] || 'test',  // Utilisation de 'test' par défaut
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true, // mettre false en production
};
