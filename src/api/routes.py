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
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    nombre = request.json.get("nombre", None)
    apellido = request.json.get("apellido", None)
    direccion = request.json.get("direccion", None)
    telefono = request.json.get("telefono", None)
    dni = request.json.get("dni", None)
    print(email)
    new = Usuarios(
            email= email,
			password= password,
			nombre=nombre,
			apellido=apellido,
			direccion=direccion,
			telefono=telefono,
			dni=dni,
            is_active=True
    )
    db.session.add(new)
    db.session.commit()
    response_body = {
        "message": "Usuario creado",
    }

    return jsonify(response_body), 200



@api.route("/login/user", methods=["POST"])
def login_usuario():
    #body = request.json
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user_query = Usuarios.query.filter_by(email=email).first()

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

    user_query = Doctores.query.filter_by(email=email).first()

    if user_query is None or email != user_query.email or password != user_query.password:
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

@api.route('/doctor', methods=['POST'])
def crear_doctores():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    nombre = request.json.get("nombre", None)
    apellido = request.json.get("apellido", None)
    telefono = request.json.get("telefono", None)
    dni = request.json.get("dni", None)
    
    new = Doctores(
            email= email,
			password= password,
			nombre=nombre,
			apellido=apellido,
			telefono=telefono,
			dni=dni,
            is_active=True
    )
    db.session.add(new)
    db.session.commit()
    response_body = {
        "message": "Doctor creado",
    }

    return jsonify(response_body), 200

@api.route('/doctores', methods=['GET'])
def get_doctores():
    doctor_query = Doctores.query.all() #estamos haciendo una consulta a Doctores para que traiga todos
    doctor_query = list(map(lambda item: item.serialize(), doctor_query))
    response_body = {
        "message": "Usuarios encontrados",
        "Usuario":doctor_query
    }

    return jsonify(response_body), 200