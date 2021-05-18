CREATE DATABASE calibraciones;

CREATE TABLE equipos(
    id VARCHAR(8) NOT NULL PRIMARY KEY,
    serie VARCHAR(50) NOT NULL DEFAULT 'S/N',
    descrpcion VARCHAR(50) NOT NULL,
    estado VARCHAR(30) NOT NULL DEFAULT 'desconocido',
    activo VARCHAR(15) NOT NULL DEFAULT 'desconocido',
    calibracion VARCHAR(10) NOT NULL DEFAULT 'interna',
    ubicacion VARCHAR(40),
    resInf VARCHAR(20),
    resSup VARCHAR(20),
    error VARCHAR(20),
);

CREATE TABLE users(
  username VARCHAR(30) NOT NULL PRIMARY KEY,
  password VARCHAR(30) NOT NULL,
  nombre VARCHAR(60) NOT NULL,
  email VARCHAR(50) NOT NULL,
);

CREATE TABLE responsables (
    equipo VARCHAR(8) NOT NULL,
    usuario VARCHAR(30) NOT NULL
);

CREATE TABLE calibracion(
    id INT IDENTITY(1,1) PRIMARY KEY,
    calibrador VARCHAR(30) NOT NULL DEFAULT '',
    fecha DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    verificador VARCHAR(30) NOT NULL,
    equipo VARCHAR(8) NOT NULL
);

