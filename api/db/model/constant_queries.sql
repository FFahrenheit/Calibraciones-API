ALTER TABLE equipos ALTER COLUMN descripcion VARCHAR(100) NOT NULL

UPDATE equipos SET estado = 'Calibración Vigente' WHERE estado = 'Calibración Aceptada';

UPDATE calibraciones SET fecha = DATEADD(HOUR,5,fecha) WHERE DATEPART(HOUR,fecha) = 0