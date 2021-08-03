CREATE OR ALTER TRIGGER dbo.actualizaReferencia
ON dbo.equipos FOR UPDATE AS 
BEGIN
	IF UPDATE(activo) OR UPDATE(periodo)
	BEGIN 
		UPDATE equipos 
		SET siguiente = DATEADD(month, equipos.periodo, equipos.ultima)  
		FROM inserted WHERE equipos.id = inserted.id AND inserted.activo != 'Referencia';

		UPDATE equipos 
		SET aviso = DATEADD(day, -20, equipos.siguiente)  
		FROM inserted WHERE equipos.id = inserted.id AND inserted.activo != 'Referencia';

		UPDATE equipos 
		SET siguiente = '2099-12-31'  
		FROM inserted WHERE equipos.id = inserted.id AND inserted.activo = 'Referencia';

		UPDATE equipos 
		SET aviso = DATEADD(day, -20, equipos.siguiente)  
		FROM inserted WHERE equipos.id = inserted.id AND inserted.activo = 'Referencia';
	END
END

CREATE OR ALTER TRIGGER actualizarPasswordTemporal
ON usuarios FOR UPDATE AS 
BEGIN
	IF UPDATE(password) 
	BEGIN 
		UPDATE usuarios SET temporal = NULL 
		FROM inserted WHERE usuarios.username = inserted.username;
	END
END

CREATE OR ALTER TRIGGER prestarEquipo on prestamos
FOR INSERT 
AS DECLARE 	@Prestatario VARCHAR(30),
	   		@Id VARCHAR(40);
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
DECLARE @equipo VARCHAR(40), @fecha DATETIME;
OPEN i;
FETCH NEXT FROM i INTO @equipo, @fecha
WHILE @@FETCH_STATUS = 0
BEGIN
	UPDATE equipos SET ultima = @fecha WHERE equipos.id = @equipo;
	UPDATE equipos SET siguiente = DATEADD(month,periodo,ultima) WHERE equipos.id = @equipo;
	UPDATE equipos SET aviso = DATEADD(day,-20,siguiente) WHERE equipos.id = @equipo;
    FETCH NEXT FROM i INTO @equipo, @fecha;
END;
CLOSE i;
DEALLOCATE i;