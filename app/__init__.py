from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)


@app.errorhandler(404)
def not_found(error):
    return {'message': 'not found'}, 404
