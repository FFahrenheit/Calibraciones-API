import io

def load_responsables():
    filename = "source.csv"

    with open(filename,'r',encoding='utf-8') as  file:
        text = file.read()
        lines = text.split('\n')

        headers = lines[0].split(',')

        index = headers.index('Responsable') 
        id_index = headers.index('ID')

        usuarios = []

        for line in lines[1:]:
            row = line.split(',')
            if row[id_index] != '' and row[id_index+1] != '':
                responsables = row[index]
                if ' y ' in responsables:
                    responsables = responsables.split('y')
                    responsables = [r.strip().lower() for r in responsables]

                    usuarios += responsables
                elif '/' in responsables:
                    responsables = responsables.split('/')
                    responsables = [r.strip().lower() for r in responsables]
                    usuarios += responsables
                elif '-' in responsables:
                    responsables = responsables.split('-')
                    responsables = [r.strip().lower() for r in responsables]
                    
                    usuarios += responsables
                else:
                    usuarios.append(responsables.strip().lower())

        # print(usuarios)
        # users = []
        # for u in usuarios:
        #     if u not in users:
        #         users.append(u)

        # print(users)

        # print(set(tuple(usuarios)))
        print(set(usuarios))
        print(len(set(usuarios)))


        # print(list(set(usuarios)))        

        with io.open('query.txt','w',encoding='utf-8') as file:
            pass
            # file.write(sql)

if __name__ == "__main__":
    load_responsables()