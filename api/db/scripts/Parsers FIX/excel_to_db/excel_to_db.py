import csv

filename = 'source.csv'
id = '\ufeffID'

def main():
    ids = []
    repeated = []
    entries = []
    with open(filename, 'r',encoding='utf-8', newline='') as source:
        reader = csv.DictReader(source)
        for device in reader:
            if device[id] != '' and device['Descripción'] != '':
                if device[id] in ids:
                    repeated.append(device[id])
                    device[id] = 'R'+device[id]
                ids.append(device[id])

                print(device[id] + ' => ' + device['Descripción'])
                # entries.append(device[id] + ' => ' + device['Descripción'] + '\n')
                
                rows = []

                rows.append(device[id])
                rows.append(device['Descripción'])
                rows.append(device['Status'])
                rows.append(device['Estado'])
                rows.append(device['Método de verificación'])
                rows.append(device['Linea del cliente'])
                rows.append(device['Resolución-'])
                rows.append(device['Resolución+'])
                rows.append(device['Error-'] + ' - ' + device['Error+'])
                periodo = float(device['Periodo'])
                periodo = round(periodo/30)
                rows.append(str(periodo))

                entries.append(rows)

    with open('query.txt','w',encoding='utf-8') as result:
        for e in entries:
            result.write(str(e) + '\n')

    with open('query.sql','w',encoding='utf-8') as sql:
        data = entries
        total = [data[x:x+100] for x in range(0, len(data), 100)]
        for entries in total:
            query = []            
            for entrie in entries:
                columns = []
                for column in entrie:
                    columns.append(f"'{ column }'")
                registry = '(' + ','.join(columns) + ')'
                query.append(registry)
                
            sentence = """INSERT INTO equipos(
    id, descripcion, estado, activo, calibracion,
    ubicacion, resInf, resSup, error, periodo
) VALUES """

            sentence += ',\n'.join(query) + ';\n\n'

            sql.write(sentence)

    print('Total inserts : ' + str(len(data)))
    print(repeated)

if __name__ == '__main__':
    main()