import ast

def search_by_name(name,data):
    #print(data[data['title'].str.contains(name,case=False,regex=False)]['title'].array)
    return ast.literal_eval(data[data['title'].str.contains(name,case=False,regex=False)]['title'].to_json())

def search_by_id(id,data):
    data = data[data['id']==int(id)].iloc[0]
    cnt =0
    cast = []
    for i in ast.literal_eval(data['cast']):
        if cnt < 10:
            cast.append(i)
            cnt+=1
        else: break

    keywords = []
    for i in ast.literal_eval(data['keywords']):
        keywords.append(i['name'])
        
    genres = []
    for i in ast.literal_eval(data['genres']):
        genres.append(i['name'])

    crew = []
    dirc=False
    writ=False
    for i in ast.literal_eval(data['crew']):
        if(i['job']=='Screenplay' and writ==False):
            crew.append(i)
            writ=True
        elif(i['job']=="Director" and dirc==False):
            crew.append(i)
            writ=True
        if dirc and writ:
            break
        


    return {
        "id":int(data['id']),
        "keywords":keywords,
        "title": data['title'],
        "genres": genres,
        "budget":int(data['Budget']),
        "cast":cast,
        "crew":crew,
        "overview":data['overview'],
        "popularity":int(data['popularity']),
        "revenue":int(data['Revenue']),
        "image":data['poster_path'],
        "release": data['release_date']
    }

   