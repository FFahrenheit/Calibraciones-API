CREATE DATABASE calibraciones;

USE  calibraciones;

CREATE TABLE equipos(
    id VARCHAR(8) NOT NULL PRIMARY KEY,
    serie VARCHAR(50) NOT NULL DEFAULT 'S/N',
    descrpcion VARCHAR(50) NOT NULL,
    estado VARCHAR(30) NOT NULL DEFAULT 'desconocido',
    activo VARCHAR(15) NOT NULL DEFAULT 'desconocido',
    calibracion VARCHAR(10) NOT NULL DEFAULT 'interna',
    ubicacion VARCHAR(40),
    resInf VARCHAR(20) DEFAULT 'N/A',
    resSup VARCHAR(20),
    error VARCHAR(20),
);

CREATE TABLE usuarios(
  username VARCHAR(30) NOT NULL PRIMARY KEY,
  password VARCHAR(30) NOT NULL,
  nombre VARCHAR(60) NOT NULL,
  email VARCHAR(50) NOT NULL,
  posicion VARCHAR(30) NOT NULL DEFAULT 'usuario',
  temporal VARCHAR(20) DEFAULT 'Interplex.0'
);

CREATE TABLE responsables (
    equipo VARCHAR(8) NOT NULL,
    usuario VARCHAR(30) NOT NULL
);

CREATE TABLE calibraciones(
    id INT IDENTITY(1,1) PRIMARY KEY,
    calibrador VARCHAR(30) NOT NULL DEFAULT '',
    fecha DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    verificador VARCHAR(30) NOT NULL,
    equipo VARCHAR(8) NOT NULL
);

CREATE TABLE verificadores(
    id INT IDENTITY(1,1) PRIMARY KEY,
    nombre VARCHAR(50),
    equipo VARCHAR(8) NOT NULL
);

ALTER TABLE responsables
ADD CONSTRAINT PK_responsables
PRIMARY KEY CLUSTERED(equipo,usuario);

ALTER TABLE responsables
ADD CONSTRAINT FK_responsables_equipo
FOREIGN KEY (equipo) REFERENCES equipos(id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE responsables
ADD CONSTRAINT FK_responsables_usuario
FOREIGN KEY (usuario) REFERENCES usuarios(username) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE calibraciones
ADD CONSTRAINT FK_calibraciones_verificador
FOREIGN KEY (verificador) REFERENCES usuarios(username) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE calibraciones
ADD CONSTRAINT FK_calibraciones_equipo
FOREIGN KEY (equipo) REFERENCES equipos(id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE verificadores 
ADD CONSTRAINT FK_verificadores_equipo
ADD CONSTRAINT (equipo) REFERENCES equipos(id) ON DELETE CASCADE ON UPDATE CASCADE;