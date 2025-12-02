let imoveis = []

let menu
do {
    menu = parseInt(prompt(
        "====== menu corretora REIS ======\n" +
        imoveis.length + " Imóveis cadastrados!\n" +
        "[1] Cadastrar imóvel\n" +
        "[2] Mostrar imóveis cadastrados\n" +
        "[3] Sair...\n"
    ))

    switch (menu) {
        case 1:
            let nome = prompt("Qual é o nome do proprietário(a) do imóvel ? ")
            let qtd_quarto = parseInt(prompt("Quantos quartos possui o imóvel ?"))
            let qtd_banheiros = parseInt(prompt("Quantos banheiros possui o imóvel ?"))
            let garagem = prompt("O imóvel possui garagem ? [SIM/NÃO] ")

            imoveis.push({
                nome: nome,
                quantidade_de_quartos: qtd_quarto,
                quantidade_de_banheiros: qtd_banheiros,
                possui_garagem: garagem
            })
            break

        case 2:
            if (imoveis.length === 0) {
                alert("Nenhum imóvel cadastrado.")
                break
            }
            // podemos resolver dessa forma 
            /*
            for (let i = 0; i < imoveis.length; i++) {
                const imovel = imoveis[i]
                let mensagem = "Imovel: " + (i + 1) + "\n" 
                for (const [chave, valor] of Object.entries(imovel)) { // cria uma const, que vai receber (chave, valor) de cada item do dicionario que esta na posição "i" do array "imoveis"
                    mensagem += chave + " " + valor + "\n"
                }

                alert(mensagem)
            }
            */
            // e podemos resolver dessa forma
            
            for (let i = 0; i < imoveis.length; i++){
                alert(
                    "Imovel " + (i + 1) +
                    "\nProprietario: " + imoveis[i].nome +
                    "\nQuartos: " + imoveis[i].quantidade_de_quartos +
                    "\nBanheiros: " + imoveis[i].quantidade_de_banheiros + 
                    "\nPossui Garagem: " + imoveis[i].possui_garagem)
            }
            break

        case 3:
            alert("Saindo...")
            break

        default:
            alert("Opção inválida, tente novamente!")
            break
    }

} while (menu !== 3)