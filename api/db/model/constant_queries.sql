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

--Para actualizar fecha de siguiente y última
UPDATE equipos SET siguiente = DATEADD(month,periodo,ultima);
UPDATE equipos SET aviso = DATEADD(day,-20,siguiente);

--Lista actual de ubicaciones
SELECT CONCAT('''',ubicacion,''',') 
FROM equipos 
GROUP BY ubicacion
ORDER BY ubicacion;

--Obtener lista de FIX con Id entero
SELECT CAST( RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) AS NUMERIC ) 
as id, descripcion, ubicacion 
FROM equipos
WHERE LEFT(id,3) = 'FIX';

-- Obtener FIX con solo leer el número
SELECT * 
FROM equipos 
WHERE LEFT(id,3) = 'FIX'
AND CAST (RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) AS NUMERIC) = 1;

-- FIX con nuevo código con F concatenada
SELECT CONCAT('F',RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1)) 
AS id, descripcion, ubicacion 
FROM equipos
WHERE LEFT(id,3) = 'FIX'
ORDER BY CAST( RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) AS NUMERIC);

-- Lista con estado
SELECT id AS ID_Completo, CONCAT('F',RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1)) 
AS ID_Abreviado, descripcion as Descripcion, ubicacion as Ubicacion, activo as Estado, calibracion as Calibracion
FROM equipos
WHERE LEFT(id,3) = 'FIX'
ORDER BY CAST( RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) AS NUMERIC);