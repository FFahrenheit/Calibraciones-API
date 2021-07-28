CREATE OR ALTER PROCEDURE dbo.updateCalibracion @ID INT, @Fecha DATE
AS
UPDATE calibraciones SET fecha = @Fecha WHERE calibraciones.id = @ID;
UPDATE equipos SET ultima = @Fecha WHERE equipos.id = (SELECT equipo FROM calibraciones WHERE calibraciones.id = @ID);
UPDATE equipos SET siguiente = DATEADD(month,periodo,ultima) WHERE equipos.id = (SELECT equipo FROM calibraciones WHERE calibraciones.id = @ID);
UPDATE equipos SET aviso = DATEADD(day,-20,siguiente) WHERE equipos.id = (SELECT equipo FROM calibraciones WHERE calibraciones.id = @ID);
GO