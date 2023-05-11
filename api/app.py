import os
from flask import Blueprint, Flask, send_from_directory
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from account import account_blueprint
from budget import budget_blueprint
from auth import auth_blueprint
from user import user_blueprint

index_blueprint = Blueprint('index', __name__,)

# Handle Angular Routing
@index_blueprint.route('/', defaults={'path': ''})
@index_blueprint.route('/<string:path>')
@index_blueprint.route('/<path:path>')
def static_proxy(path):
    if os.path.isfile('templates/' + path):
        return send_from_directory('templates', path)
    else:
        return send_from_directory("templates", "index.html")

def create_app():
    app = Flask(__name__)

    # Home
    app.register_blueprint(index_blueprint)
    # Users
    app.register_blueprint(user_blueprint)
    # Accounts
    app.register_blueprint(account_blueprint)
    # Budgets
    app.register_blueprint(budget_blueprint)
    # Authentication
    app.register_blueprint(auth_blueprint)

    # Dev environment config
    cors = CORS(app, resources={r"/*": {"origins": "*"}})
    app.config['CORS_HEADERS'] = 'Content-Type'
    app.config['JWT_SECRET_KEY'] = "super-secret"
    jwt = JWTManager(app)
    return app

if __name__ == '__main__':
    app = create_app()
    app.run(host="localhost", port=80)
