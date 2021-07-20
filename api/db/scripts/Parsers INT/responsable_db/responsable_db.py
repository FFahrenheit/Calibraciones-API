import io

def upload_responsables():
    filename = "source-1.csv"

    with open(filename,'r',encoding='utf-8') as  file:
        text = file.read()
        lines = text.split('\n')

        headers = lines[0].split(',')

        index = headers.index('Responsable') 
        id_index = headers.index('\ufeffID')

        usuarios = []

        for line in lines[1:]:
            row = line.split(',')
            if row[id_index] != '' and row[id_index+1] != '':
                responsables = row[index]
                row[id_index] = row[id_index].replace(' ','')
                if ' y ' in responsables:
                    responsables = responsables.split('y')
                    responsables = [r.strip().lower() for r in responsables]
                    for r in responsables:
                        usuarios.append([row[id_index],r])
                elif '/' in responsables:
                    responsables = responsables.split('/')
                    responsables = [r.strip().lower() for r in responsables]
                    for r in responsables:
                        usuarios.append([row[id_index],r])
                elif '-' in responsables:
                    responsables = responsables.split('-')
                    responsables = [r.strip().lower() for r in responsables]
                    for r in responsables:
                        usuarios.append([row[id_index],r])
                else:
                    usuarios.append([row[id_index],responsables.strip().lower()])


        query = []

        for u in usuarios:
            # print(u)
            sql = f"""( '{u[0]}' , (SELECT COALESCE
            ((SELECT TOP 1 username FROM usuarios WHERE 
            nombre LIKE '%{u[1]}%' COLLATE Latin1_General_CI_AI 
            OR username LIKE '%{u[1]}%' COLLATE Latin1_General_CI_AI ),
            'i.lopez' COLLATE Latin1_General_CI_AI)))"""
            query.append(sql)

        # print(query)

        sql = "INSERT INTO responsables(equipo, usuario) VALUES "
        sql += ',\n'.join(query)


        with io.open('query.txt','w',encoding='utf-8') as file:
            
            file.write(sql)


if __name__ == "__main__":
    upload_responsables()