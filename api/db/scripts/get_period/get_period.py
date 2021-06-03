import io

def get_periods():
    filename = "source.csv"

    with open(filename,'r',encoding='utf-8') as  file:
        text = file.read()
        lines = text.split('\n')

        headers = lines[0].split(',')

        id_index = headers.index('ID')
        periodo_index = headers.index('% de Gages Calibrados')

        periodos = []

        for line in lines[1:]:
            row = line.split(',')
            if row[id_index] != '' and row[id_index+1] != '':
                id_ = row[id_index].replace(' ','')
                periodo = row[periodo_index]
                if periodo == '':
                    print(f"Error on {id_}") 
                
                periodo = float(periodo)
                periodo = round( periodo /365)
                if periodo != 1:
                    periodos.append([id_,periodo])
                print(id_ + ' => ' + str(periodo) )

        queries = []
        for p in periodos:
            query = f"UPDATE equipos SET periodo = {p[1]} WHERE id = '{p[0]}';"
            queries.append(query)

        with io.open('query.txt','w',encoding='utf-8') as file:
            
            for q in queries:
                file.write(q)
                file.write('\n')


if __name__ == "__main__":
    get_periods() 