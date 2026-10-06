from flask import Flask, jsonify
import os
import psycopg2
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

@app.route('/compras/<int:cliente>')
def compras(cliente):
    con = psycopg2.connect(
        host=os.getenv("PG_HOST"),
        database=os.getenv("PG_DB"),
        user=os.getenv("PG_USER"),
        password=os.getenv("PG_PASSWORD")
    )
    cur = con.cursor()
    cur.execute("""
        SELECT data_compra, valor
        FROM compras
        WHERE codigo_cliente = %s
    """, (cliente,))
    registros = cur.fetchall()
    con.close()

    return jsonify([
        {"data": r[0].strftime("%Y-%m-%d"), "valor": float(r[1])}
        for r in registros
    ])

if __name__ == '__main__':
    app.run(port=5002, debug=True)
