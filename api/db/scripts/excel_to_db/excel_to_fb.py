def upload():
    filename = "source.csv"

    with open(filename,'r',encoding='utf-8') as  file:
        text = file.read()
        lines = text.split('\n')

        headers = lines[0].split(',')
        indexes = []

        id_index = headers.index('\ufeffID') 
        indexes.append(id_index)
        serie_index = headers.index('N° de Serie')
        indexes.append(serie_index)
        desc_index = headers.index('Descripción')
        indexes.append(desc_index)
        estado_index = headers.index('Estado')
        indexes.append(estado_index)
        activo_index = headers.index('Status')
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
        for line in lines:
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
                    entrie.append(val)
                rows.append(entrie)
                print(entrie)

        print(len(rows))




if __name__ == "__main__":
    upload()