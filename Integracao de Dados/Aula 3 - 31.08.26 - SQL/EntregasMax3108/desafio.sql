CREATE DATABASE desafio_principal;
USE desafio_principal;

-- ---------------------------------------------------------
-- Estrutura
-- ---------------------------------------------------------

CREATE TABLE produtos (
    id INT PRIMARY KEY,
    nome VARCHAR(100),
    categoria VARCHAR(50),
    preco DECIMAL(10, 2)
);

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

CREATE TABLE itens_pedido (
    id INT PRIMARY KEY,
    pedido_id INT,
    produto_id INT,
    quantidade INT,
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
    FOREIGN KEY (produto_id) REFERENCES produtos(id)
);

-- ---------------------------------------------------------
-- Dados
-- ---------------------------------------------------------

INSERT INTO produtos (id, nome, categoria, preco) VALUES
(1, 'Produto A', 'Categoria 1', 150.00),
(2, 'Produto B', 'Categoria 1', 200.00),
(3, 'Produto C', 'Categoria 2', 300.00),
(4, 'Produto D', 'Categoria 2', 400.00);

INSERT INTO clientes (id, nome, cidade) VALUES
(1, 'Cliente A', 'São Paulo'),
(2, 'Cliente B', 'Rio de Janeiro');

-- Datas ajustadas para 2025 (necessário para a condição do desafio)
INSERT INTO pedidos (id, cliente_id, valor_total, data_pedido) VALUES
(1, 1, 500.00,  '2025-10-01'),
(2, 1, 1500.00, '2025-10-15'),
(3, 2, 700.00,  '2025-10-20');

INSERT INTO itens_pedido (id, pedido_id, produto_id, quantidade) VALUES
(1, 1, 1, 2),
(2, 2, 2, 1),
(3, 3, 3, 3);

-- ---------------------------------------------------------
-- Consulta final
-- ---------------------------------------------------------

SELECT 
    c.nome AS nome_cliente,
    c.cidade,
    p.valor_total,
    p.data_pedido,
    pr.nome AS nome_produto,
    pr.preco
FROM clientes c
JOIN pedidos p ON p.cliente_id = c.id
JOIN itens_pedido ip ON ip.pedido_id = p.id
JOIN produtos pr ON pr.id = ip.produto_id
WHERE p.valor_total > (SELECT AVG(valor_total) FROM pedidos)
  AND pr.preco > (
        SELECT AVG(preco) 
        FROM produtos pr2 
        WHERE pr2.categoria = pr.categoria
      )
  AND YEAR(p.data_pedido) = 2025
ORDER BY p.valor_total DESC;