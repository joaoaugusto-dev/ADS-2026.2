from flask import Flask, jsonify
import os
from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv()

app = Flask(__name__)

colecao = MongoClient(os.getenv("MONGO_URI"))["integracao_dados"]["cliente_consolidado"]

@app.route('/consolidados')
def consolidados():
    lista = []
    for doc in colecao.find():
        doc["_id"] = str(doc["_id"])
        lista.append(doc)
    return jsonify(lista)

if __name__ == '__main__':
    app.run(port=5005, debug=True)
