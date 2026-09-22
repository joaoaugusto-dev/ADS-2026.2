# Atividade Avaliada de MongoDB — Comércio de Bicicletas

Banco: `comercio_bicicletas`
Coleções: `produtos`, `clientes`, `pedidos`, `fornecedores`

Todos os comandos abaixo são para o `mongosh`. Não foram executados — copie/cole no shell e capture os prints para o relatório.

## 1. Criar/selecionar o banco

```js
use comercio_bicicletas
```

## 2. Inserir fornecedores (5 documentos)

```js
db.fornecedores.insertMany([
  { _id: 1, nome: "Caloi Distribuidora", contato: "contato@caloi.com.br", localizacao: "São Paulo, SP", produtos_fornecidos: [] },
  { _id: 2, nome: "Shimano Brasil", contato: "vendas@shimano.com.br", localizacao: "Manaus, AM", produtos_fornecidos: [] },
  { _id: 3, nome: "Specialized Import", contato: "contato@specialized.com.br", localizacao: "Curitiba, PR", produtos_fornecidos: [] },
  { _id: 4, nome: "Trek Brasil", contato: "vendas@trek.com.br", localizacao: "Belo Horizonte, MG", produtos_fornecidos: [] },
  { _id: 5, nome: "Bike Parts Ltda", contato: "contato@bikeparts.com.br", localizacao: "Porto Alegre, RS", produtos_fornecidos: [] }
])
```

## 3. Inserir produtos (5 documentos)

```js
db.produtos.insertMany([
  { _id: 1, nome: "Bicicleta Mountain Bike Aro 29", descricao: "Quadro alumínio, freio a disco, 21 marchas", preco: 2599.90, categoria: "bicicleta", estoque: 12, fornecedor_id: 1 },
  { _id: 2, nome: "Bicicleta Speed Aro 700", descricao: "Quadro carbono, câmbio Shimano 105", preco: 6899.00, categoria: "bicicleta", estoque: 4, fornecedor_id: 3 },
  { _id: 3, nome: "Capacete Ciclismo MTB", descricao: "Ventilação em 18 pontos, ajuste traseiro", preco: 189.90, categoria: "acessório", estoque: 30, fornecedor_id: 5 },
  { _id: 4, nome: "Kit Relação Shimano Deore", descricao: "Corrente, cassete e pedivela", preco: 349.50, categoria: "acessório", estoque: 8, fornecedor_id: 2 },
  { _id: 5, nome: "Bicicleta Urbana Aro 26", descricao: "Quadro aço, cesta dianteira, bagageiro", preco: 1199.00, categoria: "bicicleta", estoque: 3, fornecedor_id: 4 }
])
```

## 4. Inserir clientes (5 documentos)

```js
db.clientes.insertMany([
  { _id: 1, nome_completo: "Ana Souza", email: "ana.souza@email.com", endereco: "Rua das Flores, 123, São Paulo, SP", telefone: "(11) 91234-5678", historico_compras: [1, 3] },
  { _id: 2, nome_completo: "Bruno Lima", email: "bruno.lima@email.com", endereco: "Av. Central, 456, Curitiba, PR", telefone: "(41) 99876-5432", historico_compras: [2] },
  { _id: 3, nome_completo: "Carla Mendes", email: "carla.mendes@email.com", endereco: "Rua Verde, 789, Belo Horizonte, MG", telefone: "(31) 98765-4321", historico_compras: [] },
  { _id: 4, nome_completo: "Diego Alves", email: "diego.alves@email.com", endereco: "Av. Sul, 321, Porto Alegre, RS", telefone: "(51) 99123-4567", historico_compras: [5] },
  { _id: 5, nome_completo: "Elisa Ramos", email: "elisa.ramos@email.com", endereco: "Rua Norte, 654, Manaus, AM", telefone: "(92) 98888-7777", historico_compras: [4] }
])
```

## 5. Inserir pedidos (5 documentos)

```js
db.pedidos.insertMany([
  { _id: 1, cliente_id: 1, produtos: [ { produto_id: 1, quantidade: 1 }, { produto_id: 3, quantidade: 1 } ], data_pedido: new Date("2026-09-10"), status: "pendente" },
  { _id: 2, cliente_id: 2, produtos: [ { produto_id: 2, quantidade: 1 } ], data_pedido: new Date("2026-09-12"), status: "enviado" },
  { _id: 3, cliente_id: 4, produtos: [ { produto_id: 5, quantidade: 1 } ], data_pedido: new Date("2026-09-14"), status: "pendente" },
  { _id: 4, cliente_id: 5, produtos: [ { produto_id: 4, quantidade: 2 } ], data_pedido: new Date("2026-09-15"), status: "pendente" },
  { _id: 5, cliente_id: 1, produtos: [ { produto_id: 3, quantidade: 2 } ], data_pedido: new Date("2026-09-18"), status: "enviado" }
])
```

## 6. Consultas

### 6.1 Listar todos os produtos disponíveis de uma determinada categoria

```js
db.produtos.find({ categoria: "bicicleta" })
```

### 6.2 Buscar o histórico de compras de um cliente específico

```js
db.clientes.findOne(
  { _id: 1 },
  { nome_completo: 1, historico_compras: 1, _id: 0 }
)
```

### 6.3 Atualizar o status de um pedido para "enviado"

```js
db.pedidos.updateOne(
  { _id: 1 },
  { $set: { status: "enviado" } }
)
```

### 6.4 Listar os produtos com estoque abaixo de um determinado valor

```js
db.produtos.find({ estoque: { $lt: 10 } })
```

## 7. Atualização de preço

```js
db.produtos.updateOne(
  { _id: 2 },
  { $set: { preco: 6499.00 } }
)
```

## 8. Verificação final (conferir antes do print)

```js
db.produtos.find().pretty()
db.clientes.find().pretty()
db.pedidos.find().pretty()
db.fornecedores.find().pretty()
```

## Roteiro sugerido do relatório

1. Print de `use comercio_bicicletas` + `show collections` após as inserções.
2. Print de cada `insertMany` com o resultado (`insertedIds`).
3. Print das 4 consultas da seção 6, cada uma com seu resultado.
4. Print da atualização de status (seção 6.3) mostrando `modifiedCount: 1`.
5. Print da atualização de preço (seção 7) e um `find` confirmando o novo valor.
