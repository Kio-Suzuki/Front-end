let myNodelist = document.getElementsByTagName("li");
for(let i = 0; i < myNodelist.length; i++){
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close"
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// REMOVE ITEM DA LISTA

let close = document.getElementsByClassName("close");
for(let i = 0; i < close.length; i++){
    close[i].onclick = function(){
        let div = this.parentElement;
        div.style.display = "none";
    }
}

// CHECK ITEM LISTA

let list = document.querySelector("ul");
list.addEventListener('click',function(ev){
    if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked');
    }
},false);

// ADICIONA NOVA TAREFA

function addElemento() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("tarefa").value;
    let data = new Date();
    let dia = data.getDate();
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();
    let dataFormatada = `${dia}/${mes}/${ano}`;
    let t = document.createTextNode(`${dataFormatada} - ${inputValue}`);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Você precisa descrever a tarefa");
    } else {
        document.getElementById("itemLista").appendChild(li);
    }

    document.getElementById("tarefa").value = "";
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}

// REMOVE TODOS ITENS DA LISTA

function removeAll(){
    let myNodelist = document.getElementsByTagName("li");
    for (let i = 0; i < myNodelist.length; i++) {
        myNodelist[i].style.display = "none";
    }
}





