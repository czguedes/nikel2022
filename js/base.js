const nome = "Caio";
let nome2 = "";
let pessoaDefault = {
    nome: "Caio",
    idade: "28",
    trabalho: "Arquiteto" 
}

let nomes = ["Caio", "Lucas","João"]
let pessoas = [
    {
        nome: "Caio",
        idade: "28",
        trabalho: "Arquiteto"  
    },
    {
        nome: "Lucas",
        idade: "23",
        trabalho: "Vendedor"
    },
    {
        nome: "João",
        idade: "21",
        trabalho: "Professor"
    }
]

function alterarnome() {
    nome2 = "Pedro"
    console.log("Valor alterado:")
    console.log(nome2)
}

function recebeEalteranome (novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:")
    console.log(nome2)
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);
    
    console.log("Idade:");
    console.log(pessoa.idade);
    
    console.log("Trabalho:");
    console.log(pessoa.trabalho);  
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa)
}

function imprimirPessoas() {
    console.log("---IMPRIMIR PESSOAS---");
    pessoas.forEach((item) => {
        console.log("Nome");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);
        
        console.log("Trabalho:");
        console.log(item.trabalho); 
    })
}

imprimirPessoas();

adicionarPessoa({
    nome: "Camila",
    idade: "18",
    trabalho: "Dev"
});

imprimirPessoas();
