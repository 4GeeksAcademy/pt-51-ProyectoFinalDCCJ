from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
    
class Usuarios(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    nombre = db.Column(db.String(150), nullable=False)
    apellido = db.Column(db.String(150), nullable=False)
    direccion = db.Column(db.String(200), nullable=False)
    telefono = db.Column(db.Integer, nullable=False)
    dni = db.Column(db.String(9), nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<Usuario {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
    
class Doctores(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    nombre = db.Column(db.String(150), nullable=False)
    apellido = db.Column(db.String(150), nullable=False)
    telefono = db.Column(db.Integer, nullable=False)
    dni = db.Column(db.String(9), nullable=False)
    id_Especialidad = db.Column(db.Integer, db.ForeignKey('especialidades.id'))
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    especialidad_Doctor = db.relationship('Especialidades', backref='doctores', lazy=True)

    def __repr__(self):
        return f'<Doctor {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
    
class Especialidades(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(150), nullable=False)
    descripcion = db.Column(db.String(1000), nullable=False)

    def __repr__(self):
        return f'<Especialidad {self.nombre}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.nombre,
            # do not serialize the password, its a security breach
        }

class Citas(db.Model):
    id = db.Column(db.Integer, primary_key=True)

    id_Usuario = db.Column(db.Integer, db.ForeignKey('usuarios.id'))
    id_Doctor = db.Column(db.Integer, db.ForeignKey('doctores.id'))
    fecha = db.Column(db.String(150), nullable=False)
    Hora = db.Column(db.String(150), nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    Citas_Usuario = db.relationship('Usuarios', backref='citas', lazy=True)
    Citas_Doctor = db.relationship('Doctores', backref='citas', lazy=True)

    def __repr__(self):
        return f'<Citas {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "Usuario": self.id_Usuario,
            # do not serialize the password, its a security breach
        }