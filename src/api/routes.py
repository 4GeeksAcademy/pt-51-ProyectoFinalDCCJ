"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Usuarios, Doctores, Especialidades, Citas
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/usuario', methods=['GET'])
def get_usuarios():
    usuario_query = Usuarios.query.all() #estamos haciendo una consulta a la User para que traiga todos
    usuario_query = list(map(lambda item: item.serialize(), usuario_query))
    response_body = {
        "message": "Usuarios encontrados",
        "Usuario":usuario_query
    }

    return jsonify(response_body), 200

@api.route('/usuario', methods=['POST'])
def crear_usuarios():
    
    response_body = {
        "message": "Usuarios creado",
    }

    return jsonify(response_body), 200


