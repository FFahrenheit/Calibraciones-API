ALTER TABLE equipos ALTER COLUMN descripcion VARCHAR(100) NOT NULL

UPDATE equipos SET estado = 'Calibración Vigente' WHERE estado = 'Calibración Aceptada';

UPDATE calibraciones SET fecha = DATEADD(HOUR,5,fecha) WHERE DATEPART(HOUR,fecha) = 0;

SELECT CONCAT('"',ubicacion,'",')
FROM equipos
GROUP BY ubicacion
ORDER BY ubicacion ASC;

INSERT INTO usuarios(username,password,nombre,email,posicion)
VALUES
('moldeo','123','Moldeos','i.lopez@mx.interplex.com','usuario')

INSERT INTO usuarios(username,password,nombre,email,posicion)
VALUES
('ensamble','123','Ensambles','i.lopez@mx.interplex.com','usuario')

INSERT INTO usuarios(username,password,nombre,email,posicion)
VALUES
('inspeccion','123','Inspección','i.lopez@mx.interplex.com','usuario')

INSERT INTO usuarios(username,password,nombre,email,posicion)
VALUES
('linea','123','Línea','i.lopez@mx.interplex.com','usuario')