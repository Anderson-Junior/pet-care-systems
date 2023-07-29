// ormconfig.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { PetEntity } from './pet/entity/pet.entity';

const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'sa12345678',
  database: 'pet-care-systems',
  entities: [PetEntity],
  synchronize: true,
  // logging: true, // <--- Ativa o modo de depuração
};

export default config;
