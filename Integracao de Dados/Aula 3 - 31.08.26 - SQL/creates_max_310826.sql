create database aula31082026;

use aula31082026;

-- Criação da tabela produtos
CREATE TABLE produtos (
    id INT PRIMARY KEY,
    nome VARCHAR(100),
    categoria VARCHAR(50),
    preco DECIMAL(10, 2)
);

-- Inserção de dados na tabela produtos 
INSERT INTO produtos (id, nome, categoria, preco) VALUES
(1, 'Produto A', 'Categoria 1', 150.00),
(2, 'Produto B', 'Categoria 1', 200.00),
(3, 'Produto C', 'Categoria 2', 300.00),
(4, 'Produto D', 'Categoria 2', 400.00);

select * from produtos;

-- ============================2============================= --

-- Criação das tabelas clientes e pedidos
CREATE TABLE clientes (
    id INT PRIMARY KEY,
    nome VARCHAR(100),
    cidade VARCHAR(50)
);

CREATE TABLE pedidos (
    id INT PRIMARY KEY,
    cliente_id INT,
    valor_total DECIMAL(10, 2),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

select * from clientes;
select * from pedidos;

-- Inserção de dados nas tabelas clientes e pedidos
INSERT INTO clientes (id, nome, cidade) VALUES
(1, 'Cliente A', 'São Paulo'),
(2, 'Cliente B', 'Rio de Janeiro');

INSERT INTO pedidos (id, cliente_id, valor_total) VALUES
(1, 1, 500.00),
(2, 1, 1500.00),
(3, 2, 700.00);

-- Criação da tabela fornecedores
CREATE TABLE fornecedores (
    id INT PRIMARY KEY,
    nome VARCHAR(100),
    cidade VARCHAR(50)
);

-- Inserção de dados na tabela fornecedores
INSERT INTO fornecedores (id, nome, cidade) VALUES
(1, 'Fornecedor A', 'Rio de Janeiro'),
(2, 'Fornecedor B', 'São Paulo');

-- Criação das tabelas itens_pedido e produtos (já criada no exercício 1)
CREATE TABLE itens_pedido (
    id INT PRIMARY KEY,
    pedido_id INT,
    produto_id INT,
    quantidade INT,
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
    FOREIGN KEY (produto_id) REFERENCES produtos(id)
);

-- Inserção de dados na tabela itens_pedido
INSERT INTO itens_pedido (id, pedido_id, produto_id, quantidade) VALUES
(1, 1, 1, 2),
(2, 2, 2, 1),
(3, 3, 3, 3);

ALTER TABLE pedidos 
ADD data_pedido DATE;

UPDATE pedidos 
SET data_pedido = '2023-10-01' 
WHERE id = 1;

UPDATE pedidos 
SET data_pedido = '2023-10-15' 
WHERE id = 2;

UPDATE pedidos 
SET data_pedido = '2023-10-20' 
WHERE id = 3;