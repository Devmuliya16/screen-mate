import pandas as pd
import pickle as pkl

print('loading data -------------------')

def load_movies():
    with open('./data/compmovies.pkl', 'rb') as movies:
        return pkl.load(movies)

def load_simillarities():
    with open('./data/compsimilarities.pkl', 'rb') as similarities:
        return pkl.load(similarities)

# def load_simillarities():
#     return pkl.load(open('./data/similarities.pkl','rb'))
