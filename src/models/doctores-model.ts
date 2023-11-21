import { timeStamp } from "console";
import { Table, Column, Model, DataType, HasMany } from "sequelize-typescript";
import { Citas } from "./citas-model";

@Table({
    timestamps: false,
    tableName: 'doctores'
})
export class Doctores extends Model{
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true
    })
    id_doctor!:number

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    nombre!:string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    apellido!:string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    correo!: string

    @Column({
        type: DataType.ENUM('medicina interna', 'medicina general'),
        allowNull: false
    })
    especialidad!: string

    @HasMany(()=> Citas)
    citas!: Citas[]
    
} 