from flask import Flask, jsonify, request
import csv
import io
import requests

app = Flask(__name__)

@app.route('/importar-clientes', methods=['POST'])
def importar():
    arquivo = request.files.get("arquivo")
    if not arquivo:
        return jsonify({"erro": "envie o CSV no campo 'arquivo'"}), 400

    leitor = csv.DictReader(io.StringIO(arquivo.read().decode("utf-8-sig")))
    codigos = [l["codigo_cliente"].strip() for l in leitor if l.get("codigo_cliente", "").strip().isdigit()]

    processados = 0
    for codigo in codigos:
        r = requests.post(f"http://localhost:5004/consolidar/{codigo}")
        processados += r.ok

    return jsonify({"processados": processados})

if __name__ == '__main__':
    app.run(port=5007, debug=True)
