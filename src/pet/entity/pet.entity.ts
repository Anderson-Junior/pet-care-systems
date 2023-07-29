import { ColdObservable } from "rxjs/internal/testing/ColdObservable";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'pets'
})
export class PetEntity{
    @PrimaryGeneratedColumn({
        unsigned: true
    })
    @PrimaryColumn()
    id: number

    @Column({
        length: 30
    })
    nome: string

    @Column({
        length: 50
    })
    especie: string

    @Column({
        length: 50
    })
    raca: string

    @Column()
    idade: number

    @Column({
        length: 50
    })
    cor: string
}