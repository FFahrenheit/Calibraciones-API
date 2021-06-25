CREATE OR ALTER TRIGGER prestarEquipo on prestamos
FOR INSERT 
AS DECLARE 	@Prestatario VARCHAR(30),
	   		@Id VARCHAR(8);

SELECT @Prestatario = ins.prestatario FROM INSERTED ins;
SELECT @Id = ins.equipo FROM INSERTED ins;
UPDATE equipos SET prestatario = @Prestatario WHERE id = @Id;

CREATE OR ALTER TRIGGER dbo.regresarEquipo
ON dbo.prestamos FOR UPDATE AS 
BEGIN
	IF UPDATE(fechaRetorno) 
	BEGIN 
		UPDATE equipos SET prestatario = NULL FROM inserted WHERE equipos.id = inserted.equipo;
	END
END

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