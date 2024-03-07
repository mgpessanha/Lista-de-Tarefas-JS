document.addEventListener("DOMContentLoaded", function () {

    const tarefa = document.getElementById("txttarefa"); 
    const adicionar = document.getElementById("btnadicionar"); 
    const limpar = document.getElementById("btnlimpar"); 
    const todolist = document.getElementById("todolist"); 

    let vet = []; 

    adicionar.addEventListener("click", function () { 
        
        let novaTarefa = tarefa.value; 
        vet.push(novaTarefa); 

        let container = document.createElement("div"); 
        container.innerHTML = novaTarefa + ` <a href="#" class="remover-tarefa">X</a>`; 
        
        todolist.appendChild(container); 

        tarefa.focus(); 
        tarefa.value = " "; 

        let remover = container.querySelector(".remover-tarefa"); 

        remover.addEventListener("click", function () { 

            let confirmar = window.confirm("Certeza? Esta ação não pode ser desfeita."); 
            
            if (confirmar) { 

                let verifica = vet.indexOf(novaTarefa); 
                if (verifica !== -1) {  
                    vet.splice(verifica); 
                }

                container.remove(); 
            }
        });   
    });

    limpar.addEventListener("click", function () { 

        vet.length = 0; 
        todolist.innerHTML = '';
        tarefa.focus();  
    });
});
