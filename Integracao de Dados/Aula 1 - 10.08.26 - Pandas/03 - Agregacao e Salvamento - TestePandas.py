import pandas as pd

data = {
    "Nome": ["Ana", "Carlos", "Maria", "João"],
    "Idade": [25, 30, 28, 22],
    "Cidade": ["SP", "RJ", "BH", "POA"],
}

df = pd.DataFrame(data)

# Soma
print("\n=== sum() - Soma das idades ===")
print(df['Idade'].sum())

# Média
print("\n=== mean() - Média das idades ===")
print(df['Idade'].mean())

# Agrupamento
print("\n=== groupby('Cidade') - Média de idade por cidade ===")
print(df.groupby('Cidade')['Idade'].mean())

# ==salvamento==

# Salvar para CSV
df.to_csv('dados.csv', index=False)
print("\n=== to_csv() - Salvo em dados.csv ===")

# Salvar para Excel
df.to_excel('dados.xlsx', index=False)
print("\n=== to_excel() - Salvo em dados.xlsx ===")
