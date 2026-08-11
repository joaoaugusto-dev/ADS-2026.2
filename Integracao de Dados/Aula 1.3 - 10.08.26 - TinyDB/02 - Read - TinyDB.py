from tinydb import TinyDB

# READ (Ler) - lê todos os registros das tabelas
db = TinyDB('dados.json')
usuarios = db.table('usuarios')
produtos = db.table('produtos')


def listar_usuarios():
    print("Usuários cadastrados:")
    for usuario in usuarios.all():
        print(usuario)


def listar_produtos():
    print("Produtos cadastrados:")
    for produto in produtos.all():
        print(produto)


# Exemplo de uso:
listar_usuarios()
listar_produtos()
