CREATE OR ALTER VIEW [calibrados] AS  
    SELECT equipo,
        CAST(fecha AS DATE) AS fecha,
        CAST( DATEADD(M, (SELECT periodo FROM equipos WHERE id = equipo), fecha) 
        AS DATE) AS esperada FROM calibraciones;
