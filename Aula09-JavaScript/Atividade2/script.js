let titulo = document.querySelector('h1');
let novoTitulo = `${titulo.textContent} e JavaScript`;
titulo.textContent = novoTitulo;

var elementos = document.querySelectorAll('.invisivel')
elementos.forEach(function(elem){
    elem.classList.remove('invisivel','animada');
});

let lista = document.querySelectorAll('li');
for(var i = 0; i < lista.length; i++) {
    let listUp = lista[i].textContent;
    let listLow = listUp.toLowerCase();
    lista[i].textContent = listLow;
}

let lista1 = document.querySelector("ul");
let novaDisciplina = document.createElement("li");
novaDisciplina.textContent = "rede de computadores - período 2 - (60H)";
lista1.appendChild(novaDisciplina);

let lista2 = document.querySelectorAll("li");
let buscar = 'WEB';
for (let i = 0; i < lista2.length; i++) {
    let item = lista[i];
    let conteudo = item.textContent;
    if (conteudo.toLowerCase().includes(buscar.toLowerCase())) {
        item.textContent = conteudo + " (Fácil)";
    }
}

