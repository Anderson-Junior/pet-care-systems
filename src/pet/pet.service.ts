import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PetEntity } from './entity/pet.entity';
import { Repository } from 'typeorm';
import { CreatePetDto } from './dto/create-pet.dto';

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(PetEntity)
    private petRepository: Repository<PetEntity>,
  ) {}

  async create(data: CreatePetDto) {
    const pet = this.petRepository.create(data);
    return this.petRepository.save(pet);
  }

  async list() {
    return this.petRepository.find();
  }
}
