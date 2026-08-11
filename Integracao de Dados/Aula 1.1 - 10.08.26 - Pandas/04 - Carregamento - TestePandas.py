import pandas as pd

# ==carregamento==
# Bases de exemplo já prontas na pasta: funcionarios.csv / funcionarios.xlsx

# Carregar de CSV
df_csv = pd.read_csv('funcionarios.csv')
print("\n=== read_csv() - Carregado de funcionarios.csv ===")
print(df_csv.head())

# Carregar de Excel
df_excel = pd.read_excel('funcionarios.xlsx')
print("\n=== read_excel() - Carregado de funcionarios.xlsx ===")
print(df_excel.head())
