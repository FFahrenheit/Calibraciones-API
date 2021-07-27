--Obtener el nombre del CONSTRAINT de la PK de equipos haciendo
ALTER TABLE equipos ALTER COLUMN id VARCHAR(40);
    --En el error nos dará el nombre

--Eliminar los CONSTRAINT
ALTER TABLE prestamos
DROP CONSTRAINT FK_prestamos_equipo;

ALTER TABLE responsables
DROP CONSTRAINT FK_responsables_equipo;

ALTER TABLE responsables
DROP CONSTRAINT PK_responsables;

ALTER TABLE calibraciones
DROP CONSTRAINT FK_calibraciones_equipo;

ALTER TABLE verificadores 
DROP CONSTRAINT FK_verificadores_equipo;

ALTER TABLE equipos
DROP CONSTRAINT PK_equipos; --Aquí va el ID

--Cambiar el tipo de dato
ALTER TABLE equipos ALTER COLUMN id VARCHAR(40) NOT NULL;

ALTER TABLE responsables ALTER COLUMN equipo VARCHAR(40) NOT NULL;

ALTER TABLE calibraciones ALTER COLUMN equipo VARCHAR(40) NOT NULL;

ALTER TABLE verificadores ALTER COLUMN equipo VARCHAR(40) NOT NULL;

ALTER TABLE prestamos ALTER COLUMN equipo VARCHAR(40) NOT NULL;

-- Volver a colocar los CONSTRAINT

ALTER TABLE equipos
ADD CONSTRAINT PK_equipos
PRIMARY KEY (id);

ALTER TABLE prestamos
ADD CONSTRAINT FK_prestamos_equipo
FOREIGN KEY (equipo) REFERENCES equipos(id) ON DELETE NO ACTION ON UPDATE CASCADE;

ALTER TABLE responsables
ADD CONSTRAINT FK_responsables_equipo
FOREIGN KEY (equipo) REFERENCES equipos(id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE responsables
ADD CONSTRAINT PK_responsables
PRIMARY KEY CLUSTERED(equipo,usuario);

ALTER TABLE calibraciones
ADD CONSTRAINT FK_calibraciones_equipo
FOREIGN KEY (equipo) REFERENCES equipos(id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE verificadores 
ADD CONSTRAINT FK_verificadores_equipo
FOREIGN KEY (equipo) REFERENCES equipos(id) ON DELETE CASCADE ON UPDATE CASCADE;