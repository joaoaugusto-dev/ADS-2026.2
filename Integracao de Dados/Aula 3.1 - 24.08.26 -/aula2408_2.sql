CREATE TABLE gruposncm AS
SELECT *
FROM ncm
WHERE length(ncm) =4;

select * from vendas v
left join produtos p on (p.codigoProduto =v.codigoProduto)
left join ncm n on (n.NCM=p.ncmproduto)
left join gruposncm g on (g.ncm=substr(p.ncmproduto,1,4));

CREATE VIEW vw_vendas_ncm AS
SELECT
    v.*,                          -- se vendas não tiver conflito interno, pode manter
    p.codigoProduto AS codigoProduto_produto,
    p.ncmproduto,
    -- demais colunas de produtos que você precisar, explicitamente
    n.NCM AS ncm_tabela,
    -- demais colunas de ncm
    g.ncm AS ncm_grupo
    -- demais colunas de gruposncm
FROM vendas v
LEFT JOIN produtos p
    ON p.codigoProduto = v.codigoProduto
LEFT JOIN ncm n
    ON n.NCM = p.ncmproduto
LEFT JOIN gruposncm g
    ON g.ncm = SUBSTR(p.ncmproduto, 1, 4);

SELECT * FROM gruposncm;

SELECT * FROM vw_vendas_ncm;