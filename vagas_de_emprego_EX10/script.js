let vagas = []

function confirma(vaga){

    const confimacao = confirm(
        "Informações da vaga: \n" +
        "Nome da vaga: " + vaga.nome_vaga + "\n" +
        "Descrição: " + vaga.descricao_vaga + "\n" +
        "Data limite: " + vaga.data_limite + "\n" +
        "Quantidade de inscritos: " + vaga.qtd_cadidatos + "\n"
     )

     return confimacao

}

function criar_vaga(){
    const nome_vaga = prompt("Qual é o nome da vaga")
    const descricao_vaga = prompt("Faça a descrição da vaga que vai ser aberta: ")
    const data_limite = prompt("Qual é a data limite para se inscrever na vaga dd/mm/aaaa ? ")

    const confimacao = confirm(
    "Infomações da vaga: \n\n" +
    "Nome da vaga: " +  nome_vaga + "\n" +
    "Descrição: " + descricao_vaga + "\n" +
    "Data limite: " + data_limite + "\n")
   
    if (confimacao){
        alert("Vaga de " + nome_vaga + " criada com sucesso!")
        return {
            nome_vaga,
            descricao_vaga,
            data_limite,
            qtd_cadidatos: 0,
            nome_cadidatos: []
        }
    }else{
        return null
    }

}

function listar_vagas(){
    if (vagas.length === 0){
        alert("Não tem nenhuma vaga em aberto no momento")
        return null
    }else{
       const vagas_texto = vagas.reduce(function(textoFinal, vaga, indice){
        textoFinal += (indice + 1) + "°  -  " 
        textoFinal += vaga.nome_vaga
        textoFinal += " (" + vaga.qtd_cadidatos + " candidatos)\n\n"
        return textoFinal
       }, "")
       alert(vagas_texto)
    }
}

function visualizar_vaga(){
    const indice = parseInt(prompt("Qual é o indice da vaga que voce quer ver?: "))
   
    if (isNaN(indice) || indice < 1 || indice > vagas.length){
        alert("Indice pesquisado está invalido")
        return null
    }

    const vaga = vagas[indice - 1]

    let candidatos = ""
    if (vaga.nome_cadidatos && vaga.nome_cadidatos.length > 0){
        for(let i = 0; i < vaga.nome_cadidatos.length; i++){
            candidatos += vaga.nome_cadidatos[i] + ", "
        }
    }else{
        candidatos = "Nenhum candidato foi cadastrado para essa vaga"
    }

    alert(
    "N° Vaga: " + indice +
    "\n Nome: " + vaga.nome_vaga +
    "\n Descrição: " + vaga.descricao_vaga +
    "\n Quantidade de candidatos: " + vaga.qtd_cadidatos +
    "\n Candidatos: " + candidatos)
    return vaga
   
}

function cadastrar_cadidato(){

    const nome = prompt("Qual é o nome do candidadto: ")
    const indice = parseInt(prompt("Qual é o indice da vaga que voce deseja cadastrar: "))
   
    if (nome === null || indice === null ) {
        alert("Cadastro cancelado.")
        return null
    }

    const vaga = vagas[indice - 1]

    const confirmar = confirma(vaga)

     if (confirmar){
        vaga.nome_cadidatos.push(nome)
        vaga.qtd_cadidatos += 1
        return vaga
     }else{
        return null
     }
}

function excluir_vaga(){
    const indice = parseInt(prompt("Qual é o indice da vaga que voce deseja excluir: "))

    if (indice === null ) {
        alert("Exclusão cancelada.")
        return null
    }

    const vaga = vagas[indice - 1]

    const confimacao = confirma(vaga)

    if (confimacao){
        alert("vaga excluida!")
        vagas.splice(vaga, 1)
        return vaga
    }else{
        return null
    }

}

function menu (){
    let opcao = 0
    let resultado, indice

    do{

        opcao = parseInt(prompt("======== MENU ========\n" +
            "[1] Listar vagas disponiveis\n" +
            "[2] Criar uma nova vaga\n" +
            "[3] Visualizar uma vaga\n" +
            "[4] Inscrever um candidadto\n" +
            "[5] Excluir uma vaga\n" +
            "[6] Sair do sistema" 
        ))

        switch(opcao){
            case 1:
                listar_vagas()
                break
            case 2:
                resultado = criar_vaga()
                vagas.push(resultado)
                break
            case 3:
                visualizar_vaga()
                break
            case 4:
                cadastrar_cadidato()
                break
            case 5:
                excluir_vaga()
                break
            case 6:
                alert("Saindo do sistema...")
                break
            default:
                alert("A opção escolhida está incorreta, tente novamente com outra opção")
                break
        }
    }while(opcao !== 6)
}

menu()