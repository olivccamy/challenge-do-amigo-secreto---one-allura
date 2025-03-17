//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    const nomeDoAmigo = document.getElementById("amigo");
    const nome = nomeDoAmigo.value.trim();

    if (nome === "") {
        alert("Digite um nome na caixa de texto!"); // Mudança aqui
        return;
    }

    amigos.push(nome);
    console.log(amigos);

    nomeDoAmigo.value = "";
    exibirAmigos();
}

function exibirAmigos() {
    const lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";
    console.log("Lista limpa");

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para o sorteio.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const resultado = document.querySelector("#resultado");

    resultado.innerHTML = `Seu amigo secreto sorteado foi: <strong>${amigoSorteado}</strong>`; // Mudança aqui
}
