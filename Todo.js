window.alert(`Clique em cima do item para exclui-lo e para adicionar basta escrever e clicar em nova tarefa`)

let addTodo = document.getElementById("addToDo");
let ListToDo = document.getElementById("ListToDo");
let TextToDo = document.getElementById("TextToDo");

addTodo.addEventListener("click", function(){
    if(document.querySelectorAll("#ListToDo > p").length <= 19) {
    var NewLine = document.createElement("p");
    NewLine.classList.add(`pStyle`);
    NewLine.innerText = TextToDo.value;
    ListToDo.appendChild(NewLine);}

    else {
        window.alert(`Lista Lotada`)
    }

    NewLine.addEventListener("click", function(){
        ListToDo.removeChild(NewLine)
    })
})