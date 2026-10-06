from flask import Flask, jsonify
import os
import firebase_admin
from dotenv import load_dotenv
from firebase_admin import credentials, db

load_dotenv()

firebase_admin.initialize_app(
    credentials.Certificate("firebase-key.json"),
    {"databaseURL": os.getenv("FIREBASE_URL")}
)

app = Flask(__name__)

@app.route('/financeiro/<codigo>')
def financeiro(codigo):
    dados = db.reference("/").child(codigo).get()

    if not dados:
        return jsonify({"erro": "Cliente não encontrado"}), 404

    return jsonify(dados)

if __name__ == '__main__':
    app.run(port=5003, debug=True)
