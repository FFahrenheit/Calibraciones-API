import io

def upload():
    filename = "source-1.csv"

    with open(filename,'r',encoding='utf-8') as  file:
        text = file.read()
        lines = text.split('\n')

        headers = lines[0].split(',')
        indexes = []
        print(headers)

        id_index = headers.index('\ufeffID') 
        indexes.append(id_index)
        serie_index = headers.index('N° de Serie')
        indexes.append(serie_index)
        desc_index = headers.index('Descripción')
        indexes.append(desc_index)
        estado_index = headers.index('Status')
        indexes.append(estado_index)
        activo_index = headers.index('Estado')
        indexes.append(activo_index)
        calibracion_index = headers.index('"Método de Verificacion calibracion"')
        indexes.append(calibracion_index)
        ubicacion_index = headers.index('Ubicación')
        indexes.append(ubicacion_index)
        res_inf_index = headers.index('Resolucion')
        indexes.append(res_inf_index)
        res_sup_index = res_inf_index + 1
        indexes.append(res_sup_index)
        error_index = headers.index('Error de equipo')
        indexes.append(error_index)

        print(indexes)

        rows = []
        for line in lines[1:]:
            row = line.split(',')

            if row[id_index] != '' and row[desc_index] != '':
                entrie = []
                for idx in indexes:
                    val = row[idx]
                    val = val.strip()
                    if idx == id_index:
                        val = val.replace(' ','')
                    if val.startswith('"') and val.endswith('"'):
                        val = val[1:-1]
                    if '""' in val:
                        val = val.replace('""','"')
                    if "'" in val:
                        val = val.replace("'","''")
                    if val == 'NA' or val == "":
                        val = 'N/A'
                    entrie.append(val)
                rows.append(entrie)
                print(entrie)

        print(len(rows))

        with io.open('query.txt','w',encoding='utf-8') as file:
            query = []
            for registry in rows:
                fields = []
                for field in registry:
                    fields.append(f"'{field}'")
                reg = '(' + ','.join(fields) + ')'
                query.append(reg)
            
            insert = 'INSERT INTO equipos(id,serie,descripcion,estado,activo,calibracion,ubicacion,resInf,resSup,error) VALUES ' 
            insert += ',\n'.join(query)

            print(insert)
            file.write(insert)




if __name__ == "__main__":
    upload()