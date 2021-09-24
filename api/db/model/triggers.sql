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

CREATE OR ALTER TRIGGER prestarEquipo
ON prestamos FOR INSERT AS 
DECLARE i CURSOR FOR
SELECT equipo, prestatario FROM inserted;
DECLARE @Id VARCHAR(40), @Prestatario VARCHAR(30);
OPEN i;
FETCH NEXT FROM i INTO @Id, @Prestatario
WHILE @@FETCH_STATUS = 0
BEGIN
	UPDATE equipos SET prestatario = @Prestatario WHERE id = @Id;
    FETCH NEXT FROM i INTO @Id, @Prestatario;
END;
CLOSE i;
DEALLOCATE i;

CREATE OR ALTER TRIGGER regresarEquipo
ON prestamos FOR UPDATE AS 
DECLARE i CURSOR FOR
SELECT equipo FROM inserted;
DECLARE @Id VARCHAR(40);
OPEN i;
FETCH NEXT FROM i INTO @Id
WHILE @@FETCH_STATUS = 0
BEGIN
	IF UPDATE(fechaRetorno) 
	BEGIN 
		UPDATE equipos SET prestatario = NULL FROM inserted WHERE equipos.id = @Id;
	END
    FETCH NEXT FROM i INTO @Id;
END;
CLOSE i;
DEALLOCATE i;

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