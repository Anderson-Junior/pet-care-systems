import { Module } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetController } from './pet.controller';
import { PetEntity } from './entity/pet.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PetEntity])],
  exports: [PetService],
  controllers: [PetController],
  providers: [PetService],
})
export class PetModule {}
