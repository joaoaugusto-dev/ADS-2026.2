SELECT * 
FROM produtos p1
WHERE preco > (
    SELECT AVG(preco)
    FROM produtos p2
    WHERE p2.categoria = p1.categoria
);

SELECT c.nome, p.valor_total
FROM clientes c
JOIN pedidos p ON c.id = p.cliente_id
WHERE c.cidade = 'São Paulo';

SELECT * 
FROM clientes c
WHERE EXISTS (
    SELECT 1
    FROM pedidos p
    WHERE p.cliente_id = c.id AND p.valor_total > 1000
);

SELECT categoria, AVG(preco) AS preco_medio
FROM produtos
GROUP BY categoria
HAVING preco_medio > 500;

SELECT nome FROM clientes WHERE cidade = 'Rio de Janeiro'
UNION
SELECT nome FROM fornecedores WHERE cidade = 'Rio de Janeiro';

SELECT pr.nome, p.valor_total
FROM produtos pr
JOIN itens_pedido ip ON pr.id = ip.produto_id
JOIN pedidos p ON ip.pedido_id = p.id
WHERE p.valor_total > 1000;

select * from pedidos;

SELECT nome, preco,
    CASE
        WHEN preco <= 500 THEN 'Barato'
        WHEN preco > 500 AND preco <= 1000 THEN 'Médio'
        ELSE 'Caro'
    END AS classificacao
FROM produtos
HAVING classificacao = 'Caro';

SELECT nome, categoria, preco
FROM (
    SELECT nome, categoria, preco,
           ROW_NUMBER() OVER (PARTITION BY categoria ORDER BY preco DESC) AS posicao
    FROM produtos
) AS ranked
WHERE posicao = 1;

SELECT * 
FROM clientes
WHERE JSON_CONTAINS(preferencias, '"promoções"', '$.interesses');