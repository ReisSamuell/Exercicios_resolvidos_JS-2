let baralho = []

do{
    var menu = parseInt(prompt("Quantidade de cartas no baralho: " + baralho.length +
    "\n[1] Adicionar carta" +
    "\n[2] Puxar uma carta" +
    "\n[3] Sair da mesa."
    ))

    switch(menu){
        case 1:
            let adicionar_carta = prompt("Qual carta e nipe voce esta colocando no baralho?")
            baralho.unshift(adicionar_carta)
            break

        case 2:
            if (baralho.length > 0){
                var carta_removida = baralho.shift()
                alert("Você  puxou a carta " + carta_removida)
            }else{
                alert("O baralho não possui cartas, adicione mais cartas para continuas pegando cartas!")
            }
            break
        
        case 3:
            alert("Saindo da mesa....")
            break
        
        default:
            alert("Opção incorreta!")
            break
    }
}while(menu !== 3)