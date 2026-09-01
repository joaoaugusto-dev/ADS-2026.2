CREATE DATABASE desafio_bonus;
USE desafio_bonus;

-- ---------------------------------------------------------
-- Estrutura
-- ---------------------------------------------------------

CREATE TABLE produtos (
    id INT PRIMARY KEY,
    nome VARCHAR(100),
    categoria VARCHAR(50),
    preco DECIMAL(10, 2)
);

-- ---------------------------------------------------------
-- Dados
-- ---------------------------------------------------------

INSERT INTO produtos (id, nome, categoria, preco) VALUES
(1, 'Produto A', 'Categoria 1', 150.00),
(2, 'Produto B', 'Categoria 1', 200.00),
(3, 'Produto C', 'Categoria 2', 300.00),
(4, 'Produto D', 'Categoria 2', 400.00);

-- ---------------------------------------------------------
-- Consulta final
-- ---------------------------------------------------------

SELECT categoria, nome, preco
FROM (
    SELECT 
        categoria, 
        nome, 
        preco,
        ROW_NUMBER() OVER (PARTITION BY categoria ORDER BY preco DESC) AS posicao
    FROM produtos
) AS ranked
WHERE posicao = 1
ORDER BY categoria ASC;