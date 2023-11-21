import { timeStamp } from "console";
import { Table, Column, Model, DataType, PrimaryKey, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Pacientes } from "./pacientes-model";
import { Doctores } from "./doctores-model";

@Table({
    timestamps: false,
    tableName: 'citas'
})
export class Citas extends Model{
    @Column({
        type: DataType.DATE,
        allowNull: false,
        primaryKey: true
    })
    fecha_hora!:Date

    @PrimaryKey
    @ForeignKey(()=> Pacientes)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    id_numeroCedula!:number

    @PrimaryKey
    @ForeignKey(()=> Doctores)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    id_doctor!:number
    
    @BelongsTo(()=> Doctores)
    doctores!: Doctores
    @BelongsTo(()=> Pacientes)
    pacientes!: Pacientes

} 