import { IsString } from "class-validator"

export class CreatePetDto{
    @IsString()
    nome: string

    @IsString()
    especie: string

    @IsString()
    raca: string

    @IsString()
    idade: number

    @IsString()
    cor: string
}