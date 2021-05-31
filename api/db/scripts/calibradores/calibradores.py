import io

def errors():
    filename = "source.csv"

    with open(filename,'r',encoding='utf-8') as  file:
        text = file.read()
        lines = text.split('\n')

        headers = lines[0].split(',')
        indexes = []

        id_index = headers.index('ID') 
        indexes.append(id_index)

        desc_index = headers.index('Descripción')

        calibrador_index = headers.index('"ID de equipo con el que se verifica / Calibra  "')
        indexes.append(calibrador_index)

        print(indexes)

        calibradores = []
        rows = []
        for line in lines[1:]:
            row = line.split(',')
            entrie = []
            if row[id_index] != '' and row[desc_index] != '':
                for idx in indexes:
                    val = row[idx]
                    if  idx == id_index:
                        val = val.replace(' ','')
                    if val.startswith('"') and val.endswith('"'):
                        val = val[1:-1]
                    if '""' in val:
                        val = val.replace('""','"')
                    if "'" in val:
                        val = val.replace("'","''")
                    if (val == 'NA' or val == "") and idx != calibrador_index:
                        val = 'N/A'
                    if idx == calibrador_index:
                        cals = []
                        if '/' in val and val != 'N/A':
                            vals = val.split('/')
                            for v in vals:
                                v = v.strip()
                                v = v.replace(' ','')
                            calibradores += vals
                            cals += vals
                        else:
                            if val == 'NA':
                                val = 'N/A'
                            if val == 'Dummis':
                                val = 'Dummies'
                            if val == '':
                                val = 'N/A'
                            calibradores.append(val)
                            cals.append(val)
                        
                        entrie.append(cals)
                    else:
                        entrie.append(val)
                
                rows.append(entrie)
                
        print(len(rows))
        calibradores = list(set(calibradores))
        print(calibradores)

        queries = []
        for row in rows:
            # print(row[1])
            for cal in row[1]:
                query = []
                query.append(f"'{row[0]}'")
                query.append(f"'{cal}'")
                queries.append(query)

        query = []
        for reg in queries:
            insert = '(' + ','.join(reg) + ')'
            query.append(insert)

        sql = 'INSERT INTO verificadores(equipo,nombre) VALUES '
        sql += ',\n'.join(query)

        with io.open('query.txt','w',encoding='utf-8') as file:
            
            file.write(sql)



if __name__ == "__main__":
    errors()