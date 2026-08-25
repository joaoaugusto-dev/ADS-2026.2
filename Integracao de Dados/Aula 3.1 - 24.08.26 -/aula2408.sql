-- TRANSFORMANDO A DESCRIÇÃO EM MAIUSCULO

update ncm  
set descricao=upper(DESCRICAO);

select * from ncm;


-- LIMPEZA DE ESPAÇOS NCM

update ncm 
set ncm=trim(ncm),descricao=trim(descricao);

select * from produtos;

-- LIMPEZA DE ESPAÇOS PRODUTOS

update produtos
set codigoProduto=trim(codigoProduto),
descricaoProduto=trim(descricaoProduto),
unidadeProduto=trim(unidadeProduto),
NCMProduto=trim(NCMProduto);

select * from produtos;

update produtos 
set NCMProduto = CONCAT('0', NCMProduto)
where length(NCMProduto) < 8;

-- ALTERANDO O CAMPO datavenda para DATE
UPDATE vendas
SET dataVenda = DATE(dataVenda);

select * from vendas;