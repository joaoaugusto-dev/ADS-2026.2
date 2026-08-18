import pandas as pd
from sqlalchemy import create_engine

engine = create_engine(
    "sqlite:///aula17082026a.db"
)

arquivos = ["./assets/NCM.csv", "./assets/produtos.csv", "./assets/vendas.csv"]

for arquivo in arquivos:

    tabela = arquivo.replace(".csv", "")

    df = pd.read_csv(
        arquivo,
        sep=None,
        engine="python",
        encoding="utf-8-sig"
    )

    df.to_sql(
        tabela,
        engine,
        if_exists="replace",
        index=False
    )

    print(f"{tabela} importada")
