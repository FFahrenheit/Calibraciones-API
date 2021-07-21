import csv

filename = 'source.csv'
id = '\ufeffID'

def main():
    usuarios = []
    with open(filename,'r',encoding='utf-8',newline='') as source:
        reader = csv.DictReader(source)
        for device in reader:
            if device[id] != '' and device['Descripción'] != '':
                usuario = device['Usuario']
                usuarios.append((device[id], usuario.strip().lower()))
    
    with open('query.txt','w',encoding='utf-8') as result:
        for u in usuarios:
            result.write(u[0] + ' => ' + u[1] + '\n')
    
    with open('query.sql','w',encoding='utf-8') as sql:
        data = usuarios
        chunk = 100
        total = [data[x:x+chunk] for x in range(0, len(data), chunk)]
        for usuarios in total:
            query = []
            for u in usuarios:
                sentence = f"""( '{u[0]}' , (SELECT COALESCE
                ((SELECT TOP 1 username FROM usuarios WHERE 
                nombre LIKE '%{u[1]}%' COLLATE Latin1_General_CI_AI 
                OR username LIKE '%{u[1]}%' COLLATE Latin1_General_CI_AI ),
                'linea' COLLATE Latin1_General_CI_AI)))"""            
                query.append(sentence)

            sentences = "INSERT INTO responsables(equipo, usuario) VALUES "
            sentences += ',\n'.join(query) + ';\n\n'

            sql.write(sentences)

    
    print('Total added = ' + str(len(total)))


if __name__ == '__main__':
    main()