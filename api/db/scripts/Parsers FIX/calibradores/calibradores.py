import csv

filename = 'source.csv'
id = '\ufeffID'

def main():
    entries = []
    with open(filename,'r',encoding='utf-8',newline='') as source:
        reader = csv.DictReader(source)
        for device in reader:
            if device[id] != '' and device['Descripción'] != '':
                _id = device[id]
                id_patron = device['ID patrón']
                patron = device['Patrón']
                if 'INT' in id_patron or 'FIX' in id_patron:
                    calibrador = id_patron
                else:
                    if id_patron == 'NA' or id_patron == '':
                        if patron != '' and patron != 'NA':
                            calibrador = patron
                        else:
                            print('Skiped ' + _id)
                            continue
                    else:
                        if patron != '' and patron != 'NA':
                            calibrador = patron + ' - ' + id_patron
                        else:
                            print('Skiped ' + _id)
                            continue
                
                # print(_id + ' => ' + calibrador)
                entries.append((_id, calibrador))
    
    with open('query.txt','w',encoding='utf-8') as result:
        for e in entries:
            result.write(e[0] + ' => ' + e[1] + '\n')

    with open('query.sql','w',encoding='utf-8') as sql:
        data = entries
        chunk = 100
        total = [data[x:x+chunk] for x in range(0, len(data), chunk)]
        for entries in total:
            query = []            
            for entrie in entries:
                columns = []
                for column in entrie:
                    columns.append(f"'{ column }'")
                registry = '(' + ','.join(columns) + ')'
                query.append(registry)
                
            sentence = """INSERT INTO verificadores(
    equipo, nombre
) VALUES """

            sentence += ',\n'.join(query) + ';\n\n'

            sql.write(sentence)

    print('Total inserts : ' + str(len(data)))


if __name__ == '__main__':
    main()