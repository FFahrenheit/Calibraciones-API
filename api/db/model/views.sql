CREATE OR ALTER VIEW [Calibrados] AS  
    SELECT equipo,
        CAST(fecha AS DATE) AS fecha,
        CAST( DATEADD(M, (SELECT periodo FROM equipos WHERE id = equipo), fecha) 
        AS DATE) AS esperada FROM calibraciones;

CREATE OR ALTER VIEW [Recientes] AS  
    SELECT equipo,
    CAST(fecha AS DATE) AS fecha FROM calibraciones;

