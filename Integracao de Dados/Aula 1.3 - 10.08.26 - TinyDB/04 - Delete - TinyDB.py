from tinydb import TinyDB, Query

# DELETE (Remover) - apaga registros usando Query
db = TinyDB('dados.json')
usuarios = db.table('usuarios')
produtos = db.table('produtos')
query = Query()


def deletar_usuario(nome):
    usuarios.remove(query.nome == nome)
    print(f"Usuário {nome} removido com sucesso!")


def deletar_produto(nome):
    produtos.remove(query.nome == nome)
    print(f"Produto {nome} removido com sucesso!")


# Exemplo de uso:
deletar_usuario("Max")
deletar_produto("Notebook")
