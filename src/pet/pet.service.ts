import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PetEntity } from './entity/pet.entity';
import { Repository } from 'typeorm';
import { CreatePetDto } from './dto/create-pet.dto';
import e from 'express';
import { UpdatePetDto } from './dto/update-pet.dto';

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

  async findById(id: number) {
    await this.exists(id);
    return await this.petRepository.findOneBy({ id });
  }

  async delete(id: number) {
    await this.exists(id);
    return this.petRepository.delete(id);
  }

  async update(id: number, data: UpdatePetDto) {
    await this.exists(id);

    return await this.petRepository.update(id, data);
  }

  async exists(id: number) {
    if (
      !(await this.petRepository.exist({
        where: {
          id,
        },
      }))
    ) {
      throw new NotFoundException(`O pet ${id} não existe.`);
    }
  }
}
