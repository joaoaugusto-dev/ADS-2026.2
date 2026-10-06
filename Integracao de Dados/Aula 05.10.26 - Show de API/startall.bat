@echo off
start "cliente" python api_cliente.py
start "compras" python api_compras.py
start "financeiro" python api_financeiro.py
start "consolidar" python api_consolidar.py
start "consolidados" python api_consolidados.py
start "exportar" python api_exportar.py
start "importar" python api_importar.py
start "ranking" python api_ranking.py
