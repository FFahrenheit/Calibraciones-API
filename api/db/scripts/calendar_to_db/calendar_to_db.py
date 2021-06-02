import io
import datetime

def upload_responsables():
    filename = "source.csv"

    with open(filename,'r',encoding='utf-8') as  file:
        text = file.read()
        lines = text.split('\n')

        headers = lines[0].split(',')

        index = headers.index('Fecha de Verificacion')
        id_index = headers.index('ID')
        cliente_index = headers.index('Prove-Calibracion')
        ext_index = headers.index('"Método de Verificacion calibracion"')

        calendario = []

        user = 'griselda.flo'

        for line in lines[1:]:
            row = line.split(',')
            if row[id_index] != '' and row[id_index+1] != '':
                fecha = row[index]
                cliente = row[cliente_index]
                is_extern = row[ext_index] == 'EXTERNO'
                if fecha == '':
                    fecha = '01/01/2000'
                if cliente.strip() == '':
                    if is_extern:
                        cliente = 'N/I'
                    else:
                        cliente = 'Interplex' 
                id_ = row[id_index].replace(' ','')
                format_str = '%d/%m/%Y' 
                datetime_obj = datetime.datetime.strptime(fecha, format_str)
                fecha = str(datetime_obj.date())
                print(id_ + ' => ' + fecha + ' => ' + cliente)
                calendario.append([cliente, fecha , user, id_])

        query = []
        for c in calendario:
            sentence = f"('{c[0]}','{c[1]}','{c[2]}','{c[3]}')"
            query.append(sentence)

        sql = "INSERT INTO calibraciones(calibrador,fecha,verificador,equipo) VALUES "
        sql += ',\n'.join(query)

        with io.open('query.txt','w',encoding='utf-8') as file:
            
            file.write(sql)


if __name__ == "__main__":
    upload_responsables()