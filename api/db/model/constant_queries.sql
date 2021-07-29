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

DELETE FROM calibraciones WHERE LEFT(equipo,'3') = 'FIX';

-- Para actualización manual de fecha de calibración
DELETE FROM calibraciones WHERE id = '';

UPDATE calibraciones SET fecha = ''

UPDATE equipos SET ultima = '' WHERE equipos.id = '';
UPDATE equipos SET siguiente = DATEADD(month,periodo,ultima) WHERE equipos.id = '';
UPDATE equipos SET aviso = DATEADD(day,-20,siguiente) WHERE equipos.id = '';

--Remplazar los /
SELECT id, descripcion FROM equipos WHERE id LIKE '%/%';

SELECT REPLACE(id,'/','--') FROM equipos WHERE id LIKE '%/%';

UPDATE equipos SET id = REPLACE(id,'/','--') WHERE id LIKE '%/%';

SELECT id, descripcion FROM equipos WHERE id LIKE '%--%'

--Actualizar las vencidas
UPDATE equipos
            SET estado = 'Calibración Vencida'
            WHERE siguiente <= CAST(GETDATE() AS DATE) 
            AND estado = 'Calibración Vigente' AND activo = 'Activo'

INSERT INTO usuarios(username,password,nombre,email,posicion)
VALUES
('operador','','operador','i.lopez@mx.interplex.com','usuario');

ALTER TABLE prestamos 
ADD operador VARCHAR(40) DEFAULT NULL;