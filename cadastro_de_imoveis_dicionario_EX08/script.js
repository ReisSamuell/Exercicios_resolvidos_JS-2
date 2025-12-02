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

            for (let i = 0; i < imoveis.length; i++) {
                const imovel = imoveis[i]
                let mensagem = "Imovel: " + (i + 1) + "\n" 
                for (const [chave, valor] of Object.entries(imovel)) {
                    mensagem += chave + " " + valor + "\n"
                }

                alert(mensagem)
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