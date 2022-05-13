from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from account import account_blueprint
from budget import budget_blueprint
from auth import auth_blueprint

def create_app():
    app = Flask(__name__)
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