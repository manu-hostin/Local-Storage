const salvar = document.getElementById('salvar');

salvar.addEventListener("click", function(){

    const nome = document.getElementById('nome-input').value;
    localStorage.setItem("nomeUsuario", nome);

    document.querySelector('.bem-vindo h1').textContent = "Bem-vindo(a), " + nome;

});
const nomeSalvo = localStorage.getItem("nomeUsuario");
if(nomeSalvo){
    document.querySelector('.bem-vindo h1').textContent = "Bem-vindo(a), " + nomeSalvo;
}

// Questão 2 //
let tarefas = JSON.parse(localStorage.getItem("tarefas"));

function mostrarTarefas (){
    const lista = document.getElementById("lista-tarefas");
    lista.innerHTML = "";

    tarefas.forEach((element, index) => {
        const li = document.createElement("li");
        li.textContent = element;
        lista.appendChild(li);
    });
}
mostrarTarefas();

document.getElementById("adicionar").addEventListener("click", function(){
    const tarefaInput = document.getElementById("tarefa");
    const novaTarefa = tarefaInput.value;

    if(novaTarefa) { // Só roda se o usuário tiver digitado
        tarefas.push(novaTarefa);
        localStorage.setItem("tarefas", JSON.stringify(tarefas));
        mostrarTarefas();
        document.getElementById("tarefa").value = ""; // Limpa o input
        
    }
});

// Questão 3 //
let contador = localStorage.getItem("contadorVisitas");

if(!contador){
    contador = 0;
}
contador = Number(contador) + 1;

document.getElementById("contador").textContent = contador;

localStorage.setItem("contadorVisitas", contador);

// Questão 4 //
const temaEscuro = document.querySelector('.tema-escuro');
const temaClaro = document.querySelector('.tema-claro');

temaClaro.addEventListener("click", function(){
    document.body.className = "claro";
    localStorage.setItem("tema", "claro");
});

temaEscuro.addEventListener("click", function(){
    document.body.className = "escuro";
    localStorage.setItem("tema", "escuro");
});
const temaSalvo = localStorage.getItem("tema");

if(temaSalvo){
    document.body.className = temaSalvo;
}
