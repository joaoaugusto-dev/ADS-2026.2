import sqlite3

# Criar ou conectar ao banco local
conexao = sqlite3.connect("integracao_dados.db")
cursor = conexao.cursor()

# Criar tabela para consolidar dados
cursor.execute("""
CREATE TABLE IF NOT EXISTS dados (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fonte TEXT NOT NULL,
    dado TEXT NOT NULL
)
""")
print("Tabela criada com sucesso para integração!")
conexao.close()
    

def adicionar_dado(fonte, dado):
    conexao = sqlite3.connect("integracao_dados.db")
    cursor = conexao.cursor()
    cursor.execute("INSERT INTO dados (fonte, dado) VALUES (?, ?)", (fonte, dado))
    conexao.commit()
    print(f"Dado da fonte {fonte} adicionado com sucesso!")
    conexao.close()

# Exemplo de uso:
adicionar_dado("API Externa", '{"nome": "Mara", "idade": 30}')
adicionar_dado("API Externa", '{"nome": "João", "idade": 30}')
adicionar_dado("API Externa", '{"nome": "Pedro", "idade": 30}')
adicionar_dado("API Externa", '{"nome": "Antônio", "idade": 30}')

def listar_dados():
    conexao = sqlite3.connect("integracao_dados.db")
    cursor = conexao.cursor()
    cursor.execute("SELECT * FROM dados")
    registros = cursor.fetchall()
    for registro in registros:
        print(registro)
    conexao.close()

def atualizar_dado(id, nova_fonte, novo_dado):
    conexao = sqlite3.connect("integracao_dados.db")
    cursor = conexao.cursor()
    cursor.execute("UPDATE dados SET fonte = ?, dado = ? WHERE id = ?", (nova_fonte, novo_dado, id))
    conexao.commit()
    print(f"Dado de ID {id} atualizado com sucesso!")
    conexao.close()

# Exemplo de uso:
atualizar_dado(1, "Fonte Atualizada", '{"nome": "Maximilian", "idade": 31}')

# Exemplo de uso:
listar_dados()