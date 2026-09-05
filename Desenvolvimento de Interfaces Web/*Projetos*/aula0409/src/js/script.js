// Isso imprime um texto no "Console" do navegador (uma área de depuração,
// tipo um bloco de notas onde o programador vê mensagens do código).
console.log("JavaScript Funcionando");

// ===== Variáveis =====
// Variável é uma "caixinha" com um nome, onde guardamos um valor para usar depois.

const nome = "Maria"; // "const" cria uma caixinha cujo valor NUNCA pode ser trocado depois.
let idade = 20; // "let" cria uma caixinha cujo valor PODE ser trocado depois (e só existe dentro do bloco/escopo onde foi criada).

// ===== Tipos de dados (primitivos) =====
// "Tipo primitivo" é a categoria mais básica de informação que uma linguagem entende.

// 1. String -> texto (sempre entre aspas ou crases)
const sobrenome = "Silva";

// 2. Number -> qualquer número, seja inteiro (15) ou decimal (15.5)
const valor = 15;

// 3. Boolean -> só pode ser "true" (verdadeiro) ou "false" (falso)
const ativo = true;

// 4. Null -> significa "nenhum valor de propósito" (é diferente de vazio, string vazia "" ou zero)
const endereco = null;

// "typeof" pergunta para o JavaScript: "qual é o tipo desse valor?" e devolve a resposta como texto.
console.log(typeof (sobrenome)); // vai mostrar "string"
console.log(typeof (valor));     // vai mostrar "number"
console.log(typeof (ativo));     // vai mostrar "boolean"
console.log(typeof (endereco));  // curiosidade: isso mostra "object" (é uma peculiaridade histórica do JavaScript)

// ===== Template String (montar textos juntando variáveis) =====

let msg = "Olá" + nome + " .Você tem " + idade + " anos."; // Concatenação: "somar" pedaços de texto usando o sinal de +
// (repare que faltam espaços ao lado de "Olá" e antes de "anos" nessa forma com +)

msg = `Olá ${nome}, você tem ${idade} anos`; // Interpolação: usando crases (``), colocamos variáveis direto dentro do texto com ${...}, fica mais fácil de ler
console.log(msg); // mostra a frase final já montada


// ===== Condicional (se... senão...) =====
// É uma "bifurcação de caminho": o código decide o que fazer dependendo de uma condição ser verdadeira ou falsa.

if (idade >= 18) { // se a idade for maior ou igual a 18...
    console.log("Acesso Autorizado");
} else { // senão (ou seja, se for menor que 18)...
    console.log("Acesso Negado");
}

// Guia rápido dos comparadores/operadores lógicos:
// == Verifica apenas o valor (compara "por cima", pode converter tipos, ex: 10 == "10" dá true)
// === Verifica valor E tipo (comparação mais segura e recomendada, ex: 10 === "10" dá false)
// && = "e" (E lógico: as duas condições precisam ser verdadeiras)
// || = "ou" (OU lógico: basta uma das condições ser verdadeira)

let numero = 10;
if (numero === 10 && numero > 0) { // só entra aqui se numero for EXATAMENTE 10 E também for maior que 0
    console.log("numero valido e permitido")
} else {
    console.log("numero invalido e não permitido")
}

// Operador Ternário: é um "if/else" resumido em uma linha só.
// Formato: condição ? "o que fazer se verdadeiro" : "o que fazer se falso"
numero > 10 ? "numero valido" : "numero invalido"; // aqui o resultado não é usado em lugar nenhum, só é calculado e descartado


// ===== Funções =====
// Função é um "bloco de instruções" que a gente empacota com um nome, para poder chamar (usar) várias vezes sem reescrever o código.

// Função Simples (sem entrada e sem retorno, só executa uma ação)
function exibirMensagem() {
    console.log("Cadastro realizado");
}

exibirMensagem(); // aqui a gente "chama"/executa a função definida acima

// Função com Parâmetro: "parâmetro" é uma informação que passamos para dentro da função para ela usar.
function exibirMensagemComParametro(nome) {
    console.log(`Ola ${nome}`) // usa o valor recebido para montar a mensagem
}

exibirMensagemComParametro("Marcelo"); // aqui estamos passando "Marcelo" como o parâmetro "nome"

// Função que devolve um resultado usando "return"
function somar(n1, n2) {
    return n1 + n2; // "return" entrega o resultado para quem chamou a função
}

const result = somar(10, 5); // guarda o resultado da soma (15) na variável "result"
exibirMensagemComParametro(result); // reaproveita a função anterior, agora passando o número 15 como se fosse o "nome"

// Arrow Function: é outro jeito (mais moderno e curto) de escrever uma função, usando "=>"
const soma = (n1, n2) => {
    return n1 + n2;
}

// ===== Manipular o DOM (Document Object Model) =====
// O DOM é a representação da página HTML dentro do navegador, em forma de objetos que o JavaScript consegue ler e alterar.
// "document.querySelector" procura um elemento HTML usando um seletor de CSS (ex: "#id", ".classe").

// ATENÇÃO: aqui está escrito "queySelector", mas o nome correto do método é "querySelector" (com "r" depois do "que").
// Por causa desse erro de digitação, essas linhas vão dar erro ao rodar, pois "queySelector" não existe.
const formulario = document.querySelector("#formCadastro"); // deveria buscar o formulário com id "formCadastro"
const campoNome = document.querySelector("#nome");          // deveria buscar o campo de input com id "nome"
const campoEmail = document.querySelector("#email");        // deveria buscar o campo de input com id "email"
const campoIdade = document.querySelector("#idade");        // deveria buscar o campo de input com id "idade"

const mensagem = document.querySelector("#mensagem");       // este já está correto: busca o elemento com id "mensagem"
const listUsuarios = document.querySelector("#listaUsuarios"); // este também está correto: busca o elemento com id "listaUsuarios"

console.log(campoNome.value); // tenta mostrar o valor digitado no campo de nome (o que a pessoa escreveu no input)

// ===== Eventos (ouvinte) =====
// "addEventListener" é como colocar um "ouvinte" esperando algo acontecer (um evento) para então reagir.

/*formulario.addEventListener("submit", function (e) { // fica esperando o formulário ser ENVIADO (evento "submit")

    e.preventDefault();

    //Capturando os dados enviados
    console.log("Formulário Enviado")
    const nome = campoNome.value.trim();
    const email = campoEmail.value.trim();
    const idade = Number(campoIdade.value);

    if (nome === "") {
        mensagem.textContent = "Informe o nome" // era "testContent" (typo) e por isso a mensagem nunca aparecia na tela
        mensagem.className = "erro";

        return;
    }

    if (nome.length < 3) {
        mensagem.textContent = "O nome deve possuir pelo menos 3 caracteres"
        mensagem.className = "erro" // era "Nome" (não existe essa classe no CSS, por isso não ficava vermelho)

        return; // faltava esse "return": sem ele, o código continuava e cadastrava mesmo com nome inválido
    }

    if (!email.includes("@")) { 
        mensagem.textContent = "Informe um e-mail válido";
        mensagem.className = "erro";

        return;
    }

    if (idade < 18) { 
        mensagem.textContent = "O usuário precisa ter pelo menos 18 anos";
        mensagem.className = "erro"

        return;
    }
    // Se passou pelas validações acima, o cadastro é válido: mostramos sucesso e adicionamos na lista.
    mensagem.textContent = "Cadastro realizado com sucesso!";
    mensagem.className = "sucesso";

    const item = document.createElement("li"); // cria um novo elemento "<li>" (item de lista) na memória
    item.textContent = `${nome} - ${email} - ${idade} anos`; // define o texto que vai aparecer dentro do "<li>"
    listUsuarios.appendChild(item); // insere esse "<li>" dentro da "<ul id="listaUsuarios">" lá na página

    formulario.reset(); // limpa os campos do formulário para um novo cadastro
}); // "e" é o objeto do evento (guarda informações sobre o que aconteceu, tipo qual botão foi clicado, etc.)

*/

const usuarios = [];

function cadastrarUsuario(e) {


    //Capturando os dados enviados
    e.preventDefault();

    //Capturando os dados enviados
    console.log("Formulário Enviado")
    const nome = campoNome.value.trim();
    const email = campoEmail.value.trim();
    const idade = Number(campoIdade.value);

    if (nome === "") {
        mensagem.textContent = "Informe o nome" // era "testContent" (typo) e por isso a mensagem nunca aparecia na tela
        mensagem.className = "erro";

        return;
    }

    if (nome.length < 3) {
        mensagem.textContent = "O nome deve possuir pelo menos 3 caracteres"
        mensagem.className = "erro" // era "Nome" (não existe essa classe no CSS, por isso não ficava vermelho)

        return; // faltava esse "return": sem ele, o código continuava e cadastrava mesmo com nome inválido
    }

    if (!email.includes("@")) {
        mensagem.textContent = "Informe um e-mail válido";
        mensagem.className = "erro";

        return;
    }

    if (idade < 18) {
        mensagem.textContent = "O usuário precisa ter pelo menos 18 anos";
        mensagem.className = "erro"

        return;
    }
    // Se passou pelas validações acima, o cadastro é válido: mostramos sucesso e adicionamos na lista.
    mensagem.textContent = "Cadastro realizado com sucesso!";
    mensagem.className = "sucesso";

    const item = document.createElement("li"); // cria um novo elemento "<li>" (item de lista) na memória
    item.textContent = `${nome} - ${email} - ${idade} anos`; // define o texto que vai aparecer dentro do "<li>"
    listUsuarios.appendChild(item); // insere esse "<li>" dentro da "<ul id="listaUsuarios">" lá na página

    formulario.reset(); // limpa os campos do formulário para um novo cadastro
    // Objetos JSON
    const usuario = {
        nome: nome,
        email: email,
        idade: idade,
    };

    usuarios.push(usuario);

    listarUsuarios();
}

formulario.addEventListener("submit", cadastrarUsuario);

function listarUsuarios() {
    listarUsuarios.innerHTML = "";
    usuarios.forEach(function (usuario) {
        const item = document.createElement("li");

        item.textContent = `${usuario.nome} - ${usuario.email}`;

        listarUsuarios.appendChild(item);
    })

}