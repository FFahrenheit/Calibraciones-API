CREATE OR ALTER TRIGGER actualizaFechas
ON calibraciones FOR INSERT AS 
DECLARE i CURSOR FOR
SELECT equipo, fecha FROM inserted;
DECLARE @equipo VARCHAR(8), @fecha DATETIME;
OPEN i;
FETCH NEXT FROM i INTO @equipo, @fecha
WHILE @@FETCH_STATUS = 0
BEGIN
	UPDATE equipos SET ultima = @fecha WHERE equipos.id = @equipo;
	UPDATE equipos SET siguiente = DATEADD(year,periodo,ultima) WHERE equipos.id = @equipo;
	UPDATE equipos SET aviso = DATEADD(day,-20,siguiente) WHERE equipos.id = @equipo;
    FETCH NEXT FROM i INTO @equipo, @fecha;
END;
CLOSE i;
DEALLOCATE i;