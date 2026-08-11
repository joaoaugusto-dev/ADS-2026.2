from tinydb import TinyDB

# CREATE (Inserir) - cria/conecta o banco, as tabelas e adiciona registros
db = TinyDB('dados.json')

# Tabelas
usuarios = db.table('usuarios')
produtos = db.table('produtos')


def adicionar_usuario(nome, idade):
    usuarios.insert({'nome': nome, 'idade': idade})
    print(f"Usuário {nome} adicionado com sucesso!")


def adicionar_produto(nome, preco):
    produtos.insert({'nome': nome, 'preco': preco})
    print(f"Produto {nome} adicionado com sucesso!")


# Exemplo de uso:
adicionar_usuario("Max", 30)
adicionar_produto("Notebook", 2500)
