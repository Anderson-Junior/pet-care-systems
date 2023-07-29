import { Body, Controller, Get, Post } from '@nestjs/common';
import { PetService } from './pet.service';
import { CreatePetDto } from './dto/create-pet.dto';

@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Post('create')
  async create(@Body() data: CreatePetDto) {
    const pet = await this.petService.create(data);
    return pet;
  }

  @Get()
  async list() {
    const pets = await this.petService.list();
    return pets;
  }
}
