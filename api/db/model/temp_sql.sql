INSERT INTO verificadores(nombre,equipo) VALUES 
('INT062','INT201'),
('INT143','INT201')

INSERT INTO verificadores(nombre,equipo) VALUES 
('INT062','INT663'),
('INT143','INT663')

INSERT INTO verificadores(nombre,equipo) VALUES 
('INT062','INT652'),
('INT143','INT652')

INSERT INTO verificadores(nombre,equipo) VALUES 
('INT062','INT649'),
('INT143','INT649')

INSERT INTO verificadores(nombre,equipo) VALUES 
('INT062','INT619'),
('INT143','INT619')

INSERT INTO verificadores(nombre,equipo) VALUES 
('INT062','INT600'),
('INT143','INT600')

INSERT INTO verificadores(nombre,equipo) VALUES 
('INT062','INT598'),
('INT143','INT598')

INSERT INTO verificadores(nombre,equipo) VALUES 
('INT062','INT470'),
('INT143','INT470')

DELETE FROM verificadores WHERE nombre = 'INT062 y INT143';

ALTER TABLE prestamos
ADD retorna VARCHAR(30) DEFAULT NULL;

ALTER TABLE prestamos
ADD CONSTRAINT FK_prestamos_retorna
FOREIGN KEY (retorna) REFERENCES usuarios(username) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE prestamos
ADD operadorRegresa VARCHAR(40) DEFAULT NULL;

ALTER TABLE proveedores 
ADD expiracion DATE NOT NULL DEFAULT '2099-12-31';