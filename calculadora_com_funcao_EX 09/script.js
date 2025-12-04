function area_triangulo(base, altura){
        return base * altura / 2
}

function area_retangulo(base, altura){
        return base * altura
}

function area_quadrado(lado){
        return lado * lado
}

function area_trapezio(base_maior, base_menor, altura){
        return (base_maior + base_menor) * altura / 2
}

function area_circulo(raio, pi){
        return pi * (raio * raio)
}

function menu (){
    let base, altura, lado, base_maior, base_menor, raio, resultado
    const pi = 3.14
    let opcao = 0
    
    do{
         opcao = parseInt(prompt("Qual figura geométerica voce deseja descobrir a area?\n" +
            "[1] Triângulo\n" +
            "[2] Retângulo\n" +
            "[3] Quadrado\n" +
            "[4] Trapézio\n" +
            "[5] Círculo\n" +
            "[6] Sair"));

        switch(opcao){
                case 1:
                    base = parseFloat(prompt("Qual é a medida da base? "))
                    altura = parseFloat(prompt("Qual é a medida da altura? "))
                    resultado = area_triangulo(base, altura)
                    alert("A área do triângulo é: " + resultado)
                    break
                
                case 2:
                    base = parseFloat(prompt("Qual é a medida da base? "))
                    altura = parseFloat(prompt("Qual é a medida da altura? "))
                    resultado = area_retangulo(base, altura)
                    alert("A área do retângulo é: " + resultado)
                    break
                
                case 3:
                    lado = parseFloat(prompt("Qual é a medida de um dos lados? "))
                    resultado = area_quadrado(lado)
                    alert("A área do quadrado é: " + resultado)
                    break

                case 4:
                    base_maior = parseFloat(prompt("Qual é a medida da base maior? "))
                    base_menor = parseFloat(prompt("Qual é a medida da base menor? "))
                    altura = parseFloat(prompt("Qual é a medida da altura? "))
                    resultado = area_trapezio(base_maior, base_menor, altura)
                    alert("A área do trapézio é: " + resultado)
                    break

                case 5:
                    raio = parseFloat(prompt("Qual é a medida do raio? "))
                    resultado = area_circulo(raio, pi)
                    alert("A área do circulo é: " + resultado)
                    break

                case 6:
                    alert("Saindo do sistema...")
                    break

                default:
                    alert("A opção escolhida está incorreta, tente outra opção!")
                    break
            }
    }while(opcao !== 6)        
}

menu() 
