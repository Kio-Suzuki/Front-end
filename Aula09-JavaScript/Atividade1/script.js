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

var itemLista = [];
var count = 1;

function addTask(task) {
    var newTask = { id: count++, task: task}; //cria um novo objetivo de paciente (newPatient), com as propriedades id, name e age
    itemLista.push(newTask); //comando que adiciona o novo paciente ao final da lista de pacientes
    localStorage.setItem('itemLista', JSON.stringify(itemLista)); //o JSON.stringfy converte o objeto JavaScript em uma string JSON
    renderTaskList();
  }

  function renderTaskList() {
    var taskListElement = document.getElementById('itemLista');
    taskListElement.innerHTML = ''; //limpa o conteúdo HTML do elemento patientListElement
  
    itemLista.forEach(function (task) {
      var listItem = document.createElement('li');
      //renderiza a lista de pacientes. Itera sobre cada paciente na lista encontrada e cria um <li> para cada paciente
      listItem.innerHTML = '<span class="task-name">' + task.task + '</span><button class="delete-button" onclick="deletePatient(' + task.id + ')">Excluir</button>';
      taskListElement.appendChild(listItem);
    });
  }




