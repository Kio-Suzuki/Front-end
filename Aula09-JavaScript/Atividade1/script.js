var itemList = [];
var count = 1;

function addItem(dataFormatada, inputValue) {
    var newItem = { id: count++, data: dataFormatada, task: inputValue }; //cria um novo objeto de paciente (newPatient), com as propriedades id, name e age
    itemList.push(newPatient); //comando que adiciona o novo paciente ao final da lista de pacientes
    localStorage.setItem('itemList', JSON.stringify(itemtList)); //o JSON.stringfy converte o objeto JavaScript em uma string JSON
    renderItemList();
}

function getItemList() {
    var storedList = JSON.parse(localStorage.getItem('itemList')); //converte a string JSON para objeto JavaScript
    itemList = storedList || []; //se storedList for um valor válido (não seja nulo ou indefinido). é atribuido a patientList. Caso contrário, patientList recebe um array vazio
}

function renderItemList() {
    var itemListElement = document.getElementById('itemList');
    itemListElement.innerHTML = ''; //limpa o conteúdo HTML do elemento patientListElement
  
    itemList.forEach(function (item) {
      var listItem = document.createElement('li');
      //renderiza a lista de pacientes. Itera sobre cada paciente na lista encontrada e cria um <li> para cada paciente
      listItem.innerHTML = '<span class="patient-name">' + patient.name + '</span> (Idade: ' + patient.age + ') <button class="delete-button" onclick="deletePatient(' + patient.id + ')">Excluir</button>';
      patientListElement.appendChild(listItem);
    });
  }

  document.getElementById('itemLista').addEventListener('submit', function (event) {
    event.preventDefault();
    var tarefa = document.getElementById('tarefa');
    addItem(itemInput.value);
    itemInput.value = '';
   
  });

let myNodelist = document.getElementsByTagName("li");
for(let i = 0; i < myNodelist.length; i++){
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close"
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
for(let i = 0; i < close.length; i++){
    close[i].onclick = function(){
        let div = this.parentElement;
        div.style.display = "none";
    }
}

let list = document.querySelector("ul");
list.addEventListener('click',function(ev){
    if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked');
    }
},false);

function addElemento() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("tarefa").value;
    let data = new Date();
    let dia = data.getDate();
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();
    let dataFormatada = `${dia}/${mes}/${ano}`;
    let t = document.createTextNode(`${dataFormatada} - ${inputValue.toUpperCase()}`);
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

function removeAll(){
    let myNodelist = document.getElementsByTagName("li");
    for (let i = 0; i < myNodelist.length; i++) {
        myNodelist[i].style.display = "none";
    }
}





