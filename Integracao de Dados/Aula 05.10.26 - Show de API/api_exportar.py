from flask import Flask, jsonify
import os
from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv()
import pandas as pd

app = Flask(__name__)

colecao = MongoClient(os.getenv("MONGO_URI"))["integracao_dados"]["cliente_consolidado"]

@app.route('/exportar')
def exportar():
    registros = [
        {
            "codigo": d["cliente"]["codigo"],
            "nome": d["cliente"]["nome"],
            "cidade": d["cliente"]["cidade"],
            "limite": d["financeiro"]["limite"],
            "saldo": d["financeiro"]["saldo"],
            "total_compras": sum(c["valor"] for c in d["compras"]),
        }
        for d in colecao.find()
    ]

    pd.DataFrame(registros).to_excel("clientes_consolidados.xlsx", index=False)

    return jsonify({"arquivo": "clientes_consolidados.xlsx"})

if __name__ == '__main__':
    app.run(port=5006, debug=True)
