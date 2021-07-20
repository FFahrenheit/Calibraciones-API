import io
import csv
import datetime

filename = 'source.csv'
id = '\ufeffID'
user = 'griselda.flo'
cliente = 'Interplex'

def main():
    calendario = []

    with open(filename,'r',encoding='utf-8', newline='') as source:
        reader = csv.DictReader(source)

        for device in reader:
            if device[id] != '' and device['Descripción'] != '' :
                fecha = device['Fecha de verificación']
                if fecha == '':
                    fecha = '01/01/2000'
                
                format_str = '%d/%m/%Y' 
                print(device[id] + ' => ' + fecha)
                datetime_obj = datetime.datetime.strptime(fecha, format_str)
                fecha = str(datetime_obj.date())
                print(device[id] + ' => ' + fecha + ' => ' + cliente)
                calendario.append([cliente, fecha , user, device[id]]) 

    sql = ''
    data = calendario
    total = [data[x:x+100] for x in range(0, len(data), 100)]
    for  calendario in total:
        query = []
        for c in calendario:
            sentence = f"('{c[0]}','{c[1]}','{c[2]}','{c[3]}')"
            query.append(sentence)

        sql += "INSERT INTO calibraciones(calibrador,fecha,verificador,equipo) VALUES "
        sql += ',\n'.join(query) +';\n\n'

    with io.open('query.sql','w',encoding='utf-8') as file:
        
        file.write(sql)

    

if __name__ == '__main__':
    main()