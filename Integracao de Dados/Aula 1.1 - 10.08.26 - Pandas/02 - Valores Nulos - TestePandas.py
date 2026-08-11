import pandas as pd
import numpy as np

# Criar DataFrame com valores ausentes
df_nulos = pd.DataFrame({
    'A': [1, 2, np.nan, 4],
    'B': [5, np.nan, np.nan, 8],
    'C': [10, 20, 30, 40]
})

# Verificar valores nulos
print("\n=== isnull() - Verificar valores nulos ===")
print(df_nulos.isnull())

# Remover linhas com valores nulos
print("\n=== dropna() - Remover linhas com nulos ===")
print(df_nulos.dropna())

# Preencher valores nulos
print("\n=== fillna(0) - Preencher nulos com 0 ===")
print(df_nulos.fillna(value=0))
