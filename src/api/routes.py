"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Usuarios, Doctores, Especialidades, Citas
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/users', methods=['POST', 'GET'])
def usuarios():

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


@api.route("/login/user", methods=["POST"])
def login_usuario():
    #body = request.json
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user_query = User.query.filter_by(email=email).first()

    #print(user_query.email)



    if email != user_query.email or password != user_query.password:
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

@api.route("/login/doctor", methods=["POST"])
def login_doctor():
    #body = request.json
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user_query = User.query.filter_by(email=email).first()

    #print(user_query.email)



    if email != user_query.email or password != user_query.password:
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)


