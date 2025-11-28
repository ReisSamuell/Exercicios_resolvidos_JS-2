let fila_pacientes = []

do{
    let paciente = ""
    for (let i = 0; i < fila_pacientes.length; i++){
        paciente += (i + 1) + "° " + fila_pacientes[i] + "\n"
    }
    var menu = parseInt(prompt(paciente + 
    "============ MENU ============\n" +
    "[1] Novo Paciente\n" +
    "[2] Consultar Paciente\n" +
    "[3] Sair"))

    switch(menu){
        case 1:
            var nome_paciente = prompt("Qual é o nome do paciente ?")
            fila_pacientes.push(nome_paciente)
            alert(nome_paciente + " Adicionado a fila!")
            break

        case 2:
            if (fila_pacientes.length > 0) {
                alert(fila_pacientes[0] + " Por favor se dirigir ao consultório medico!")
                fila_pacientes.shift()
            } else {
                alert("A fila está vazia.")
            }
            break
        
        case 3:
            alert("Saindo so sistema da clinica médica..")
            break

    }

}while(menu !== 3)