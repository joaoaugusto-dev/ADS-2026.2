import pandas as pd

# Criando um DataFrame
data = {
    "Nome": ["Ana", "Carlos", "Maria", "João"],
    "Idade": [25, 30, 28, 22],
    "Cidade": ["SP", "RJ", "BH", "POA"],
}

df = pd.DataFrame(data)

# Primeiras linhas
print("\n=== head(2) - Primeiras linhas ===")
print(df.head(2))

# Últimas linhas
print("\n=== tail(2) - Últimas linhas ===")
print(df.tail(2))

# Informações do DataFrame
print("\n=== info() - Informações do DataFrame ===")
print(df.info())

# Estatísticas descritivas
print("\n=== describe() - Estatísticas descritivas ===")
print(df.describe())

# SELECT de duas (ou mais) colunas
print("\n=== Seleção de colunas [['Nome', 'Idade']] ===")
print(df[['Nome', 'Idade']])

# Selecionar linhas por índice
print("\n=== iloc[1] - Segunda linha ===")
print(df.iloc[1])
print("\n=== iloc[1:3] - Linhas 2 e 3 ===")
print(df.iloc[1:3])

# Selecionar por condição
print("\n=== Filtro por condição (Idade > 25) ===")
print(df[df['Idade'] > 25])

# Adicionar nova coluna
df['Salário'] = [5000, 6000, 5500, 4500]
print("\n=== Adicionar coluna 'Salário' ===")
print(df)

# Remover coluna
df = df.drop('Salário', axis=1)
print("\n=== drop() - Remover coluna 'Salário' ===")
print(df)

# Renomear colunas
df = df.rename(columns={'Cidade': 'UF'})
print("\n=== rename() - 'Cidade' -> 'UF' ===")
print(df)
