from flask import request, jsonify
import plotly.figure_factory as ff
import numpy as np

def get_custom_dendrogram():
    data = request.get_json()
    if isinstance(data, list):
        try:
            custom_data = np.array(data)
            custom_fig = ff.create_dendrogram(custom_data)
            custom_fig.update_layout(width=800, height=500)
            fig_json = custom_fig.to_json()
            return jsonify({ "type": "RXSUCCESS","message": "Dendrogram generated successfully","data": fig_json})
        except Exception as e:
            return jsonify({ "type": "RXERROR", "message": f"An error occurred: {str(e)}"}), 500
    else:
        return jsonify({ "type": "RXERROR", "message": "Invalid input data"}), 400
