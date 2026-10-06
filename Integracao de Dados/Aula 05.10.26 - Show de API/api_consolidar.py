from flask import Flask, jsonify
import requests
import os
from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv()

app = Flask(__name__)

colecao = MongoClient(os.getenv("MONGO_URI"))["integracao_dados"]["cliente_consolidado"]

@app.route('/consolidar/<codigo>', methods=['GET', 'POST'])
def consolidar(codigo):
    cliente = requests.get(f'http://localhost:5001/cliente/{codigo}').json()
    compras = requests.get(f'http://localhost:5002/compras/{codigo}').json()
    financeiro = requests.get(f'http://localhost:5003/financeiro/{codigo}').json()

    # as APIs de origem devolvem {"erro": ...} (dict) quando algo falha
    for nome, dado in (("cliente", cliente), ("financeiro", financeiro)):
        if "erro" in dado:
            return jsonify({"status": "erro", nome: dado["erro"]}), 404

    # upsert: consolidar 2x o mesmo cliente não duplica o documento
    colecao.replace_one(
        {"cliente.codigo": cliente["codigo"]},
        {"cliente": cliente, "compras": compras, "financeiro": financeiro},
        upsert=True
    )

    return jsonify({"status": "sucesso", "cliente": codigo})

if __name__ == '__main__':
    app.run(port=5004, debug=True)
