from flask import Flask
from routes.dendrogram import dendrogram_bp
from flask_cors import CORS

# Initialize Flask server
app = Flask(__name__)
CORS(app)

# Register the blueprint
app.register_blueprint(dendrogram_bp, url_prefix='/api')

# Run the Flask server
if __name__ == '__main__':
    app.run(host='localhost', port=8000)

