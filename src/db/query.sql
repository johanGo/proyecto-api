DROP DATABASE IF EXISTS citas;

CREATE DATABASE IF NOT EXISTS citas CHARACTER SET utf8mb4;

USE citas;

CREATE TABLE doctores (
    id_doctor INT NOT NULL,
    nombre VARCHAR(80) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    correo VARCHAR(30) NOT NULL,
    especialidad ENUM('medicina_interna', 'medicina_general') NOT NULL,
    PRIMARY KEY (id_doctor)
);

CREATE TABLE pacientes(
    id_numeroCedula INT NOT NULL,
    nombre VARCHAR(80) NOT NULL,
    apellido VARCHAR(80) NOT NULL,
    fecha_nac DATE NOT NULL, 
    PRIMARY KEY (id_numeroCedula)
);

CREATE TABLE citas(
    fecha_hora DATETIME PRIMARY KEY,
    id_doctor INT NOT NULL,
    id_numeroCedula INT NOT NULL,
    FOREIGN KEY(id__doctor) REFERENCES doctores(id_doctor),
    FOREIGN KEY(id_numeroCedula) REFERENCES pacientes(id_numeroCedula),
    PRIMARY KEY(id_doctor, id_numeroCedula, fecha_hora)
);

CREATE TABLE telefonos(
    telefonos VARCHAR(15) PRIMARY KEY,
    id_ numeroCedula INT NOT NULL, 
    FOREIGN KEY(id_ numeroCedula) REFERENCES pacientes(id_numeroCedula)
)
