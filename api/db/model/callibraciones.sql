CREATE DATABASE calibraciones;

USE calibraciones;

CREATE TABLE equipos(
    id VARCHAR(40) NOT NULL PRIMARY KEY,
    serie VARCHAR(50) NOT NULL DEFAULT 'S/N',
    descripcion VARCHAR(100) NOT NULL,
    estado VARCHAR(30) NOT NULL DEFAULT 'desconocido',
    activo VARCHAR(15) NOT NULL DEFAULT 'desconocido',
    calibracion VARCHAR(10) NOT NULL DEFAULT 'interna',
    ubicacion VARCHAR(40),
    resInf VARCHAR(20) DEFAULT 'N/A',
    resSup VARCHAR(20),
    error VARCHAR(20),
    periodo INT NOT NULL DEFAULT 12,
    ultima DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    siguiente DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    aviso DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    prestatario VARCHAR(30) DEFAULT NULL
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
    equipo VARCHAR(40) NOT NULL,
    usuario VARCHAR(30) NOT NULL
);

CREATE TABLE calibraciones(
    id INT IDENTITY(1,1) PRIMARY KEY,
    calibrador VARCHAR(120) NOT NULL DEFAULT '',
    fecha DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    verificador VARCHAR(30) NOT NULL,
    equipo VARCHAR(40) NOT NULL,
    ryr VARCHAR(150) DEFAULT NULL,
    certificado VARCHAR(150) DEFAULT NULL
);

CREATE TABLE verificadores(
    id INT IDENTITY(1,1) PRIMARY KEY,
    nombre VARCHAR(50),
    equipo VARCHAR(40) NOT NULL
);

CREATE TABLE proveedores(
    id INT IDENTITY(1,1) PRIMARY KEY,
    nombre VARCHAR(60) NOT NULL UNIQUE,
    certificado VARCHAR(100) DEFAULT NULL,
    agregado DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    expiracion DATE NOT NULL DEFAULT '2099-12-31'
);

-- CREATE TABLE proveedores(
--     id INT IDENTITY(1,1) PRIMARY KEY,
--     nombre VARCHAR(60) NOT NULL,
--     certificado VARCHAR(100) DEFAULT NULL,
--     equipo VARCHAR(40) NOT NULL
-- );

CREATE TABLE prestamos(
    id INT IDENTITY(1,1) PRIMARY KEY,
    estado VARCHAR(20) DEFAULT 'Entregado',
    fechaEntrega DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    fechaRetorno DATETIME DEFAULT NULL,
    fechaCompromiso DATE DEFAULT NULL,
    notas VARCHAR(120) DEFAULT '',
    equipo VARCHAR(40) NOT NULL,
    prestatario VARCHAR(30) NOT NULL,
    retorna VARCHAR(30) DEFAULT NULL,
    operador VARCHAR(40) DEFAULT NULL,
    operadorRegresa VARCHAR(40) DEFAULT NULL,
    entrega VARCHAR(30) NOT NULL,
    recibe VARCHAR(30)
);

CREATE TABLE recursos(
    id INT IDENTITY(1,1) PRIMARY KEY,
    version INT NOT NULL DEFAULT 1,
    tipo VARCHAR(120),
    equipo VARCHAR(40) NOT NULL,
    archivo VARCHAR(255),
    fecha DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
);

ALTER TABLE recursos
ADD CONSTRAINT FK_recursos_equipo
FOREIGN KEY (equipo) REFERENCES equipos(id) ON DELETE NO ACTION ON UPDATE CASCADE;

ALTER TABLE prestamos
ADD CONSTRAINT FK_prestamos_equipo
FOREIGN KEY (equipo) REFERENCES equipos(id) ON DELETE NO ACTION ON UPDATE CASCADE;

ALTER TABLE prestamos
ADD CONSTRAINT FK_prestamos_prestatario
FOREIGN KEY (prestatario) REFERENCES usuarios(username) ON DELETE NO ACTION ON UPDATE CASCADE;

ALTER TABLE prestamos
ADD CONSTRAINT FK_prestamos_retorna
FOREIGN KEY (retorna) REFERENCES usuarios(username) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE prestamos
ADD CONSTRAINT FK_prestamos_entrega
FOREIGN KEY (entrega) REFERENCES usuarios(username) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE prestamos
ADD CONSTRAINT FK_prestamos_recibe
FOREIGN KEY (recibe) REFERENCES usuarios(username) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE equipos
ADD CONSTRAINT FK_equipo_prestatario
FOREIGN KEY (prestatario) REFERENCES usuarios(username) ON DELETE NO ACTION ON UPDATE NO ACTION

-- ALTER TABLE proveedores
-- ADD CONSTRAINT FK_proveedores_equipo
-- FOREIGN KEY (equipo) REFERENCES equipos(id) ON DELETE CASCADE ON UPDATE CASCADE;

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
FOREIGN KEY (equipo) REFERENCES equipos(id) ON DELETE CASCADE ON UPDATE CASCADE;