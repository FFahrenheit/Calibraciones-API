import csv

filename = 'source.csv'
id = '\ufeffID'

def main():
    entries = []
    with open(filename, 'r',encoding='utf-8', newline='') as source:
        reader = csv.DictReader(source)
        for device in reader:
            if device[id] != '' and device['Descripción'] != '':
                print(device[id] + ' => ' + device['Descripción'])
                # entries.append(device[id] + ' => ' + device['Descripción'] + '\n')
                
                rows = []

                rows.append(device[id])
                rows.append(device['Descripción'])
                rows.append(device['Estado'])
                rows.append(device['Status'])
                rows.append(device['Método de verificación'])
                rows.append(device['Linea del cliente'])
                rows.append(device['Resolución-'])
                rows.append(device['Resolución+'])
                rows.append(device['Error-'] + ' - ' + device['Error+'])
                rows.append(device['Periodo'])

                entries.append(rows)

    with open('query.txt','w',encoding='utf-8') as result:
        for e in entries:
            result.write(str(e) + '\n')

if __name__ == '__main__':
    main()