from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from utils import load_data, recommand ,search_movie
import os


app = Flask(__name__,static_folder="client/dist")
CORS(app, origins=["http://localhost:5173"], supports_credentials=True)


# load the data
movies = load_data.load_movies()
similarities = load_data.load_simillarities()


path = os.path.join(os.getcwd(),'client','dist')


# @app.route('/')
# def hello():
#     return send_from_directory(directory=path,path='index.html') --> will not work


@app.route('/<path:filename>')
def serve_static(filename):
    return send_from_directory(directory=app.static_folder, path=filename)

@app.route('/api/recommand', methods=['GET'])
def get_data():
    movie_name = request.args.get('name')
    size = int(request.args.get('length',50))
  
    suggested_movies = recommand.recommand_movies(name=movie_name,data=movies,similarity=similarities,length=size)
    return jsonify(suggested_movies)

@app.route('/api/search/<name>',methods=['GET'])
def search(name):
    return search_movie.search_by_name(name,movies)

@app.route('/api/details/<id>' ,methods=['GET'])
def get_movie(id):
    return search_movie.search_by_id(id,movies)

if __name__ == '__main__':
    app.run(debug=True)
