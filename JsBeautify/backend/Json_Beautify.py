from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import json
import os

app = Flask(__name__, static_folder='../frontend/build', static_url_path='/')
CORS(app)

@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')


@app.route('/beautify', methods=['POST'])
def beautifJson():
    try:
        rawJson = request.json.get('input', '')
        parsedJson = json.loads(rawJson)    
        formatted_json = json.dumps(parsedJson, indent=4, ensure_ascii=False)
        return jsonify({"status": "success", "data": formatted_json}), 200
    
    except json.JSONDecodeError as e:
        return jsonify({"status": "error", "message": f"Error decoding JSON: {e}"}), 400



if __name__ == "__main__":
    app.run(host='localhost', port=5000)
