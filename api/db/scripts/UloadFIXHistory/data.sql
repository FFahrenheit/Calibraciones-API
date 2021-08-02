INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '003'),
            'Historial\003 FIX-4918-003.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '004'),
            'Historial\004 FIX-0799-0742-0810-004.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '005'),
            'Historial\005 FIX-0799-0742-0810-005 BAJA.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '006'),
            'Historial\006 FIX-4528-006.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '007'),
            'Historial\007 FIX-3749-007.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '010'),
            'Historial\010 FIX-3266-010.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '011'),
            'Historial\011 FIX-3266-011.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '014'),
            'Historial\014 FIX-IXI293-014.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '016'),
            'Historial\016 FIX-2964-016.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '018'),
            'Historial\018 FIX-2277-018.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '019'),
            'Historial\019 FIX-2277-019.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '021'),
            'Historial\021 FIX-2277-021.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '027'),
            'Historial\027 FIX-1447-027 baja.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '028'),
            'Historial\028 FIX-1447-028 Baja.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '029'),
            'Historial\029 FIX-1447-029.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '030'),
            'Historial\030 FIX-1447-030.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '031'),
            'Historial\031 FIX-2340-031.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '032'),
            'Historial\032-FIX-5552-032 baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '034'),
            'Historial\034 FIX-3754-034.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '035'),
            'Historial\035 FIX-3874-035.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '036'),
            'Historial\036 FIX-3874-036.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '051'),
            'Historial\051 FIX-2160-051.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '052'),
            'Historial\052 FIX-IXI293-052.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '053'),
            'Historial\053 FIX-2925-053 baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '056'),
            'Historial\056 FIX-5875-056.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '058'),
            'Historial\058 FIX-3790-058 .xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '062'),
            'Historial\062 FIX-5134-062.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '063'),
            'Historial\063 FIX-4405-063 BAJA.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '065'),
            'Historial\065 FIX-5060-065 BAJA.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '066'),
            'Historial\066 FIX-5060-066 baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '071'),
            'Historial\071 FIX-3051-071.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '072'),
            'Historial\072 FIX-5860-072 Baja.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '074'),
            'Historial\074 FIX-6033-074.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '076'),
            'Historial\076 FIX-5060&5061-076 BAJA.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '078'),
            'Historial\078 FIX-5061-078.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '079'),
            'Historial\079 FIX-3404-079.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '080'),
            'Historial\080 FIX-5060-080 baja.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '081'),
            'Historial\081 FIX-5362-63-081.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '082'),
            'Historial\082 FIX-4106-082 BAJA.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '083'),
            'Historial\083 FIX-1356-083.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '084'),
            'Historial\084 FIX-4106-084 baja.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '085'),
            'Historial\085 FIX-1657-085.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '086'),
            'Historial\086 FIX-4106-086 baja.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '087'),
            'Historial\087 FIX-5060-087 baja.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '088'),
            'Historial\088 FIX-4106-088.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '089'),
            'Historial\089 FIX-4106-089 baja.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '092'),
            'Historial\092 FIX-5671-092 baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '093'),
            'Historial\093 FIX-5134-093.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '094'),
            'Historial\094 FIX-5496-094.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '095'),
            'Historial\095 FIX-5800-095 baja.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '096'),
            'Historial\096 FIX-4405-06-096.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '098'),
            'Historial\098 FIX-3266-098.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '099'),
            'Historial\099 FIX-4293-099 baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '100'),
            'Historial\100 FIX-5496-100.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '101'),
            'Historial\101 FIX-5552-101.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '102'),
            'Historial\102 FIX-1252-102.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '103'),
            'Historial\103 FIX-2572-103.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '105'),
            'Historial\105 FIX-6107-105 Baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '107'),
            'Historial\107 FIX-6337-107.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '109'),
            'Historial\109 FIX-4749-109.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '111'),
            'Historial\111 FIX-1962-111.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '112'),
            'Historial\112 FIX-3051-112.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '113'),
            'Historial\113 FIX-6338-113 baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '114'),
            'Historial\114 FIX-4067-114.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '115'),
            'Historial\115 FIX-4067-115.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '116'),
            'Historial\116 FIX-5874-116.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '117'),
            'Historial\117 FIX-5671-117 BAJA.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '118'),
            'Historial\118 FIX-5999-118 baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '119'),
            'Historial\119 FIX-5999-119 baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '120'),
            'Historial\120 FIX-4405-06-120.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '121'),
            'Historial\121 FIX-4405-06-121.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '122'),
            'Historial\122 FIX-4749-122.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '123'),
            'Historial\123 FIX-5671-123 baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '124'),
            'Historial\124 FIX-3794-124.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '125'),
            'Historial\125 FIX-5800-125 baja.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '126'),
            'Historial\126 FIX-5800-126 baja.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '127'),
            'Historial\127 FIX-5800-127 baja.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '128'),
            'Historial\128 FIX-4918-128 baja.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '129'),
            'Historial\129 FIX-5060-129 BAJA.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '130'),
            'Historial\130 FIX-6734-130.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '131'),
            'Historial\131 FIX-6734-131.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '132'),
            'Historial\132 FIX-6734-132.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '133'),
            'Historial\133 FIX-5671-133.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '134'),
            'Historial\134 FIX-6033-134.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '135'),
            'Historial\135 FIX-3658&59-135.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '136'),
            'Historial\136 FIX-5999-136 baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '137'),
            'Historial\137 FIX-7614-137..xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '138'),
            'Historial\138 FIX-5671-138.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '139'),
            'Historial\139 FIX-3790-139.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '140'),
            'Historial\140 FIX-6338-140 Baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '141'),
            'Historial\141 FIX-6337-141 baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '143'),
            'Historial\143 FIX-3790-143 baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '144'),
            'Historial\144 FIX-4918-144 baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '145'),
            'Historial\145 FIX-4918-145.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '146'),
            'Historial\146 FIX-4918-146 baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '147'),
            'Historial\147 FIX-2882-147.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '148'),
            'Historial\148-FIX-3658-148.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '149'),
            'Historial\149-FIX-3051-149 en reparación.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '150'),
            'Historial\150 FIX-5877-150 baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '151'),
            'Historial\151 FIX-5874-151 BAJA.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '152'),
            'Historial\152 FIX-6194-300-152.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '153'),
            'Historial\153 FIX-5874-153.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '154'),
            'Historial\154 FIX-5134-154.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '155'),
            'Historial\155 FIX-6194-155.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '156'),
            'Historial\156-FIX-6798-156 BAJA.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '157'),
            'Historial\157-FIX-6725-157.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '159'),
            'Historial\159-FIX-5552-159 baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '160'),
            'Historial\160-FIX-7107-160.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '161'),
            'Historial\161-FIX-5060-161 BAJA.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '162'),
            'Historial\162-FIX-6194-162 BAJA.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '163'),
            'Historial\163-FIX-6194-163 BAJA.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '164'),
            'Historial\164-FIX-6194-164 BAJA.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '165'),
            'Historial\165-FIX-5873-165.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '166'),
            'Historial\166-FIX-6336-166.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '167'),
            'Historial\167-FIX-6550-167.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '168'),
            'Historial\168-FIX-5999-168 baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '169'),
            'Historial\169-FIX-5999-169.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '170'),
            'Historial\170 FIX-6337-170.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '171'),
            'Historial\171 FIX-6652-171.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '172'),
            'Historial\172 FIX-6725,98-172.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '173'),
            'Historial\173 FIX-6798-173 baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '174'),
            'Historial\174 FIX-6652-174.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '175'),
            'Historial\175 FIX-8251-175.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '176'),
            'Historial\176-FIX-7614-176.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '177'),
            'Historial\177-FIX-7107-177 baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '178'),
            'Historial\178 FIX-6652-178 reemplazo.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '179'),
            'Historial\179 FIX-6725-98-179 baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '180'),
            'Historial\180 FIX-6734-180.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '181'),
            'Historial\181 FIX-Block gage-181 VEREFICAR.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '182'),
            'Historial\182 FIX-6725-182 baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '183'),
            'Historial\183 FIX-6151-183 baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '185'),
            'Historial\185 FIX-BORE GAGE-185 baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '186'),
            'Historial\186 FIX-BORE GAGE-186.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '187'),
            'Historial\187 FIX-BORE GAGE-187.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '188'),
            'Historial\188 FIX-BORE GAGE-188 baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '189'),
            'Historial\189 FIX-BORE GAGE-189 baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '190'),
            'Historial\190 FIX-6725-190 baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '191'),
            'Historial\191 FIX-6725-191 baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '192'),
            'Historial\192 FIX-6725-192 baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '193'),
            'Historial\193 FIX-6151-193 baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '194'),
            'Historial\194 FIX-6725-194 baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '195'),
            'Historial\195 FIX-6652-195.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '196'),
            'Historial\196 FIX-6652-196.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '197'),
            'Historial\197 FIX-6652-197.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '198'),
            'Historial\198 FIX-6652-198.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '199'),
            'Historial\199 FIX-6033-199.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '200'),
            'Historial\200 FIX-7614-200.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '201'),
            'Historial\201 FIX-5671-201.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '202'),
            'Historial\202-FIX-6798-202.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '203'),
            'Historial\203-FIX-7787-203.xls');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '204'),
            'Historial\204 FIX-6734-204.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '205'),
            'Historial\205 FIX-6734-205.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '206'),
            'Historial\206 FIX-8423-206.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '207'),
            'Historial\207 FIX-6725-207 baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '208'),
            'Historial\208 FIX-6725-208 baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '209'),
            'Historial\209 FIX-6725-209 baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '210'),
            'Historial\210 FIX-4749-210.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '211'),
            'Historial\211 FIX-7121-211.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '212'),
            'Historial\212 FIX-8585-212 baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '213'),
            'Historial\213 FIX-8585-213 baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '214'),
            'Historial\214 FIX-8585-214 baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '215'),
            'Historial\215 FIX-8585-215 Reemplazo.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '216'),
            'Historial\216 FIX-7683-216.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '217'),
            'Historial\217 FIX-6798-217.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '218'),
            'Historial\218 FIX-6798-218.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '219'),
            'Historial\219 FIX-6798-219.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '220'),
            'Historial\220 FIX-6798-220.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '221'),
            'Historial\221 FIX-6798-221.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '222'),
            'Historial\222 FIX-6257-222.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '223'),
            'Historial\223 FIX-6257-223.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '225'),
            'Historial\225 FIX-6337-225.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '226'),
            'Historial\226 FIX-BORE GAGE-226.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '227'),
            'Historial\227 FIX-BORE GAGE-227.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '228'),
            'Historial\228 FIX-BORE GAGE-228.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '229'),
            'Historial\229 FIX-6798-229 baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '230'),
            'Historial\230 FIX-6798-230 baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '231'),
            'Historial\231 FIX-6798-231 baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '232'),
            'Historial\232 FIX-6798-232.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '233'),
            'Historial\233 FIX-6725-233.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '234'),
            'Historial\234 FIX-6725-234 baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '235'),
            'Historial\235 FIX-6725-235.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '236'),
            'Historial\236 FIX-6725-236.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '237'),
            'Historial\237 FIX-6107-237.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '238'),
            'Historial\238 FIX-6652-238.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '239'),
            'Historial\239 FIX-6652-239.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '240'),
            'Historial\240 FIX-5999-240 En proceso.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '241'),
            'Historial\241 FIX-6798-241 baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '242'),
            'Historial\242 FIX-6798-GR10-242.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '243'),
            'Historial\243 FIX-6798-10R-243.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '244'),
            'Historial\244 FIX-6798-244 baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '245'),
            'Historial\245 FIX-6194-245.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '246'),
            'Historial\246 FIX-6798-10R-246.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '247'),
            'Historial\247 FIX-6798-247 baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '248'),
            'Historial\248 FIX-6194-248.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '249'),
            'Historial\249 FIX-6798-10R-249.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '250'),
            'Historial\250 FIX-5874-250 .xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '251'),
            'Historial\251 FIX-5874-251.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '252'),
            'Historial\252 FIX-5874-252.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '253'),
            'Historial\253 FIX-BORE GAGE-253.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '254'),
            'Historial\254 FIX-BORE GAGE-254.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '255'),
            'Historial\255 FIX-3266-255.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '256'),
            'Historial\256 FIX-5619-256 proceso.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '257'),
            'Historial\257 FIX-8515-257.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '258'),
            'Historial\258 FIX-8515-258.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '259'),
            'Historial\259 FIX-5619-259 proceso.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '260'),
            'Historial\260 FIX-9318-260.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '261'),
            'Historial\261 FIX-9318-261.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '262'),
            'Historial\262 FIX-9318-262.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '263'),
            'Historial\263 FIX-9318-263.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '264'),
            'Historial\264 FIX-9318-264.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '265'),
            'Historial\265 FIX-9318-265.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '266'),
            'Historial\266 FIX-9318-266.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '267'),
            'Historial\267 FIX-8423-267.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '268'),
            'Historial\268 FIX-6798-GR10-268.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '269'),
            'Historial\269 FIX-9318-269.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '270'),
            'Historial\270 FIX-9318-270.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '271'),
            'Historial\271 FIX-9318-271.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '272'),
            'Historial\272 FIX-9318-272 Baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '273'),
            'Historial\273-FIX-9318-273 Baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '274'),
            'Historial\274-FIX-7336-274.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '275'),
            'Historial\275-FIX-2920-275.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '276'),
            'Historial\276-FIX-2920-276.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '277'),
            'Historial\277 FIX-6725-277.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '278'),
            'Historial\278 FIX-6725-278.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '279'),
            'Historial\279 FIX-6725-279.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '280'),
            'Historial\280 FIX-6725-280.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '281'),
            'Historial\281 FIX-6725-281.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '282'),
            'Historial\282 FIX-6798-GR10-282.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '283'),
            'Historial\283 FIX-6725-283.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '284'),
            'Historial\284 FIX-4749-284.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '285'),
            'Historial\285 FIX-3266-285.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '286'),
            'Historial\286 FIX-3266-286.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '287'),
            'Historial\287 FIX-9278-287 BAJA.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '288'),
            'Historial\288 FIX-6798-288.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '289'),
            'Historial\289 FIX-9318-289 Baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '290'),
            'Historial\290 FIX-6798-290.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '291'),
            'Historial\291 FIX-6151-291.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '292'),
            'Historial\292 FIX-6798-080-10R-292.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '293'),
            'Historial\293 FIX-6798-080-10R-293.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '294'),
            'Historial\294 FIX-6798-080-10R-294.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '295'),
            'Historial\295 FIX-6798-080-10R-295.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '296'),
            'Historial\296 FIX-6798-080-10R-296.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '297'),
            'Historial\297 FIX-6798-080-10R-297.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '298'),
            'Historial\298 FIX-6798-080-10R-298.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '299'),
            'Historial\299 FIX-6798-080-10R-299.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '300'),
            'Historial\300 FIX-6725-300.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '301'),
            'Historial\301 FIX-10009-301.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '302'),
            'Historial\302 FIX-FAMILIA EFI-302 BAJA.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '303'),
            'Historial\303 FIX-FAMILIA EFI-303 reemplazo.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '304'),
            'Historial\304 FIX-FAMILIA EFI-304 BAJA.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '305'),
            'Historial\305 FIX-FAMILIA EFI-305 baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '306'),
            'Historial\306 FIX-FAMILIA EFI-306 Baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '307'),
            'Historial\307 FIX-FAMILIA EFI-307 BAJA.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '308'),
            'Historial\308 FIX-5671-308.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '309'),
            'Historial\309 FIX-5671-309.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '310'),
            'Historial\310 FIX-5671-310.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '311'),
            'Historial\311 FIX-9278-311.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '312'),
            'Historial\312 FIX-9278-312.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '313'),
            'Historial\313 FIX-9278-313.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '314'),
            'Historial\314 FIX-7197-314.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '315'),
            'Historial\315 FIX-7197-315.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '316'),
            'Historial\316 FIX-9304-316.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '317'),
            'Historial\317 FIX-9304-317.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '318'),
            'Historial\318 FIX-6151-318.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '319'),
            'Historial\319 FIX-6151-319.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '320'),
            'Historial\320 FIX-7614-320.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '321'),
            'Historial\321 FIX-9985-321 En proceso.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '322'),
            'Historial\322 FIX-9985-322.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '323'),
            'Historial\323 FIX-10008-323 En proceso.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '324'),
            'Historial\324 FIX-10024-324 En proceso.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '325'),
            'Historial\325 FIX-10024-325 En proceso.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '326'),
            'Historial\326 FIX-10027-326.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '327'),
            'Historial\327 FIX-5671-327.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '328'),
            'Historial\328 FIX-5671-328.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '329'),
            'Historial\329 FIX-10027  X69F-329.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '330'),
            'Historial\330 FIX-6798-330.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '331'),
            'Historial\331 FIX-10027 X69F-331.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '332'),
            'Historial\332 FIX-6798-332.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '333'),
            'Historial\333 FIX-6798-333.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '334'),
            'Historial\334 FIX-6798-334.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '335'),
            'Historial\335 FIX-5134-335.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '336'),
            'Historial\336 FIX-6725-336.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '337'),
            'Historial\337 FIX-5671-337.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '338'),
            'Historial\338 FIX-5670-338.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '339'),
            'Historial\339 FIX-8423-339.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '340'),
            'Historial\340 FIX-9307-340.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '341'),
            'Historial\341 FIX-9304-341.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '342'),
            'Historial\342 FIX-8422-342.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '343'),
            'Historial\343 FIX-9318-343.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '344'),
            'Historial\344 FIX-9318-344.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '345'),
            'Historial\345 FIX-9318-345.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '346'),
            'Historial\346 FIX-9318-346.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '347'),
            'Historial\347 FIX-9318-347.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '348'),
            'Historial\348 FIX-8422-348 Baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '349'),
            'Historial\349 FIX-8585-349 Baja.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '350'),
            'Historial\350 FIX-9670-350.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '351'),
            'Historial\351 FIX-9318-351.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '352'),
            'Historial\352 FIX-9318-352.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '353'),
            'Historial\353 FIX-3686-353.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '354'),
            'Historial\354 FIX-6257-354.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '355'),
            'Historial\355 FIX-8422-355.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '356'),
            'Historial\356 FIX-10024-356.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '357'),
            'Historial\357 FIX-10024-357 En proceso.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '358'),
            'Historial\358 FIX-9810-358.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '359'),
            'Historial\359 FIX-9810-359.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '360'),
            'Historial\360 FIX-9810-360.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '361'),
            'Historial\361 FIX-9810-361.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '362'),
            'Historial\362 FIX-9810-362.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '363'),
            'Historial\363 FIX-9318-363.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '364'),
            'Historial\364 FIX-9318-364.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '365'),
            'Historial\365 FIX-9318-365.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '366'),
            'Historial\366 FIX-9670-366.xlsx');
INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('Historial',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '367'),
            'Historial\367 FIX-8673-367.xlsx');