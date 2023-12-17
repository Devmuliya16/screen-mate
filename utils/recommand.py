import ast

def recommand_movies(name,data,similarity,length):
    movie_index = data[data['title']==name].index[0]
    distances = similarity[movie_index]
    movie_list = sorted(enumerate(distances),reverse=True,key=lambda x: x[1])[1:length]

    li = []
    for i in movie_list:
        # cast = []
        # cnt=0
        # for j in ast.literal_eval(data.iloc[i[0]].cast):
        #     if cnt <3:
        #         cast.append(j)
        #         cnt+=1
        #     else:
        #         break

        li.append({
            "title" : data.iloc[i[0]].title,
            "id" : str(data.iloc[i[0]].id),
            "overview": data.iloc[i[0]].overview,
            "image":data.iloc[i[0]].poster_path,
            })
    return li
