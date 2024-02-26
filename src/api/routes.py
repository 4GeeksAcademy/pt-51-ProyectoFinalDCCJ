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
    # Obtener datos de la solicitud
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    nombre = request.json.get("nombre", None)
    apellido = request.json.get("apellido", None)
    direccion = request.json.get("direccion", None)
    telefono = request.json.get("telefono", None)
    dni = request.json.get("dni", None)
    imagen = request.json.get("imagen", None)

    # Validar entradas
    if not email or not password or not nombre or not apellido or not direccion or not telefono or not dni:
        response_body = {
            "error": "Todos los campos son obligatorios."
        }
        return jsonify(response_body), 400  # Solicitud incorrecta


    # Crear nuevo usuario
    new_user = Usuarios(
        email=email,
        password=password,
        nombre=nombre,
        apellido=apellido,
        direccion=direccion,
        telefono=telefono,
        dni=dni,
        is_active=True,
        imagen=imagen
    )

    # Agregar y confirmar en la base de datos
    db.session.add(new_user)
    db.session.commit()

    # Verificar si la confirmación fue exitosa
    if new_user.id:
        response_body = {
            "message": "Usuario creado"
        }
        return jsonify(response_body), 200
    else:
        # Manejar errores relacionados con la base de datos
        db.session.rollback()
        response_body = {
            "error": "Error al crear el usuario."
        }
        return jsonify(response_body), 500  # Error interno del servidor
	



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
    # Obtener datos de la solicitud
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    nombre = request.json.get("nombre", None)
    apellido = request.json.get("apellido", None)
    telefono = request.json.get("telefono", None)
    dni = request.json.get("dni", None),
    imagen = request.json.get("imagen", None),
    url_Calendly = request.json.get("url_Calendly", None)

    # Validar entradas
    if not email or not password or not nombre or not apellido or not telefono or not dni or not url_Calendly:
        response_body = {
            "error": "Todos los campos son obligatorios."
        }
        return jsonify(response_body), 400  # Solicitud incorrecta

   
    # Crear nuevo doctor
    new_doctor = Doctores(
        email=email,
        password=password,
        nombre=nombre,
        apellido=apellido,
        telefono=telefono,
        dni=dni,
        is_active=True,
        imagen=imagen,
        url_Calendly=url_Calendly
    )

    # Agregar y confirmar en la base de datos
    db.session.add(new_doctor)
    db.session.commit()

    # Verificar si la confirmación fue exitosa
    if new_doctor.id:
        response_body = {
            "message": "Doctor creado"
        }
        return jsonify(response_body), 200
    else:
        # Manejar errores relacionados con la base de datos
        response_body = {
            "error": "Error al crear el doctor."
        }
        return jsonify(response_body), 500  # Error interno del servidor

@api.route('/doctores', methods=['GET'])
def get_doctores():
    doctor_query = Doctores.query.all()  # Hacer una consulta para traer todos los doctores

    # Verificar si se encontraron doctores
    if doctor_query:
        doctor_query = list(map(lambda item: item.serialize(), doctor_query))
        response_body = {
            "message": "Doctores encontrados",
            "doctores": doctor_query
        }
        return jsonify(response_body), 200
    else:
        # Manejar el caso en el que no se encuentran doctores
        response_body = {
            "message": "No se encontraron doctores"
        }
        return jsonify(response_body), 404  # No encontrado

@api.route('/info/doctores/especialidades', methods=['GET'])
def get_home_data():
    doctores_query = Doctores.query.all()
    especialidades_query = Especialidades.query.all()

    if not doctores_query and not especialidades_query:
        return jsonify({"error": "No se encontraron doctores ni especialidades"}), 404

    doctores_query_serialized = list(map(lambda item: item.serialize(), doctores_query))
    especialidades_query_serialized = list(map(lambda item: item.serialize(), especialidades_query))

    response_body = {
        "message": "Datos encontrados",
        "doctores": doctores_query_serialized,
        "especialidades": especialidades_query_serialized
    }

    return jsonify(response_body), 200

@api.route('/info/contactanos', methods=['POST'])
def contactanos():
    # Obtener los datos del formulario
    data = request.json

    # Verificar si los datos están presentes
    if "nombre" in data and "email" in data and "mensaje" in data:
        # Puedes realizar acciones con los datos, por ejemplo, almacenarlos en la base de datos
        # Aquí estoy simplemente imprimiendo los datos recibidos en la consola
        print("Nombre:", data["nombre"])
        print("Email:", data["email"])
        print("Mensaje:", data["mensaje"])

        response_body = {
            "message": "Datos recibidos exitosamente"
        }
        return jsonify(response_body), 200
    else:
        # Manejar el caso en el que no se proporcionan todos los datos esperados
        response_body = {
            "message": "Faltan datos en la solicitud"
        }
        return jsonify(response_body), 400  # Código de error de solicitud incorrecta
