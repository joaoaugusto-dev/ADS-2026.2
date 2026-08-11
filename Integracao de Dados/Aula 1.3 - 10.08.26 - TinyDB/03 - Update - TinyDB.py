from tinydb import TinyDB, Query

# UPDATE (Atualizar) - altera registros existentes usando Query
db = TinyDB('dados.json')
usuarios = db.table('usuarios')
produtos = db.table('produtos')
query = Query()


def atualizar_usuario(nome, nova_idade):
    usuarios.update({'idade': nova_idade}, query.nome == nome)
    print(f"Usuário {nome} atualizado com sucesso!")


def atualizar_produto(nome, novo_preco):
    produtos.update({'preco': novo_preco}, query.nome == nome)
    print(f"Produto {nome} atualizado com sucesso!")


# Exemplo de uso:
atualizar_usuario("Max", 31)
atualizar_produto("Notebook", 2600)
