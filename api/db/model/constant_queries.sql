ALTER TABLE equipos ALTER COLUMN descripcion VARCHAR(100) NOT NULL

UPDATE equipos SET estado = 'Calibración Vigente' WHERE estado = 'Calibración Aceptada';