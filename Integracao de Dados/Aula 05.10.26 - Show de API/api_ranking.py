from flask import Flask, jsonify
import os
from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv()

app = Flask(__name__)

colecao = MongoClient(os.getenv("MONGO_URI"))["integracao_dados"]["cliente_consolidado"]

@app.route('/ranking-clientes')
def ranking():
    pipeline = [
        {"$unwind": "$compras"},
        {"$group": {"_id": "$cliente.nome", "total_compras": {"$sum": "$compras.valor"}}},
        {"$sort": {"total_compras": -1}},
        {"$project": {"_id": 0, "cliente": "$_id", "total_compras": 1}},
    ]
    return jsonify(list(colecao.aggregate(pipeline)))

if __name__ == '__main__':
    app.run(port=5008, debug=True)
