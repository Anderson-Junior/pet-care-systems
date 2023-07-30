import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PetService } from './pet.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { ParamId } from './decorators/param-id.decorator';
import { UpdatePetDto } from './dto/update-pet.dto';

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

  @Get(':id')
  async findById(@ParamId() id) {
    return await this.petService.findById(id);
  }

  @Put(':id')
  async update(@ParamId() id, @Body() data: UpdatePetDto) {
    return await this.petService.update(id, data);
  }

  @Delete(':id')
  async delete(@ParamId() id) {
    return this.petService.delete(id);
  }
}
