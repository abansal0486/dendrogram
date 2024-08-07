from flask import Blueprint
from controllers.dendrogram_controller import get_custom_dendrogram

# Create a blueprint
dendrogram_bp = Blueprint('dendrogram', __name__)

# Define route for generating dendrogram JSON
@dendrogram_bp.route('/dendrogram', methods=['POST'])
def dendrogram_route():
    return get_custom_dendrogram()
