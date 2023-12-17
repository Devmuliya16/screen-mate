import pandas as pd
import pickle as pkl

print('loading data -------------------')

def load_movies():
    return pkl.load(open('./data/movies.pkl','rb'))

def load_simillarities():
    return pkl.load(open('./data/similarities.pkl','rb'))
