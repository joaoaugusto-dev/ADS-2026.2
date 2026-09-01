CREATE DATABASE desafio_mestre_jedi;
USE desafio_mestre_jedi;

-- ---------------------------------------------------------
-- Estrutura
-- ---------------------------------------------------------

CREATE TABLE clientes (
    id INT PRIMARY KEY,
    nome VARCHAR(100),
    cidade VARCHAR(50)
);

CREATE TABLE pedidos (
    id INT PRIMARY KEY,
    cliente_id INT,
    valor_total DECIMAL(10, 2),
    data_pedido DATE,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

-- ---------------------------------------------------------
-- Dados
-- Cliente A vai para Ouro (soma > 5000), Cliente B fica em Bronze,
-- só para os três níveis de classificação aparecerem no resultado.
-- ---------------------------------------------------------

INSERT INTO clientes (id, nome, cidade) VALUES
(1, 'Cliente A', 'São Paulo'),
(2, 'Cliente B', 'Rio de Janeiro'),
(3, 'Cliente C', 'Belo Horizonte');

INSERT INTO pedidos (id, cliente_id, valor_total, data_pedido) VALUES
(1, 1, 500.00,  '2025-10-01'),
(2, 1, 1500.00, '2025-10-15'),
(3, 1, 4500.00, '2025-11-01'),
(4, 2, 700.00,  '2025-10-20'),
(5, 3, 3200.00, '2025-09-05');

-- Cliente A: 500 + 1500 + 4500 = 6500  -> Ouro
-- Cliente B: 700                       -> Bronze
-- Cliente C: 3200                      -> Prata

-- ---------------------------------------------------------
-- Consulta final
-- ---------------------------------------------------------

SELECT 
    c.nome AS nome_cliente,
    SUM(p.valor_total) AS total_comprado,
    CASE
        WHEN SUM(p.valor_total) <= 1000 THEN 'Bronze'
        WHEN SUM(p.valor_total) BETWEEN 1000.01 AND 5000 THEN 'Prata'
        ELSE 'Ouro'
    END AS classificacao
FROM clientes c
JOIN pedidos p ON p.cliente_id = c.id
GROUP BY c.id, c.nome
ORDER BY total_comprado DESC;