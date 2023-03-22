//desestruturação de array
const [valorA, valorB, valorC] = document.getElementsByName('valor')
const root = document.getElementById('root')

function calcular() {
    //exibindo valores inseridos
    console.log(valorA.value)
    console.log(valorB.value)
    console.log(valorC.value)

    //convertendo o valor em numero (pois html trata tudo como string)
    const A = Number(valorA.value)
    const B = Number(valorB.value)
    const C = Number(valorC.value)

    let result

    //B elevado 2 - 4ac 
    const delta = (B ** 2) - (4 * A * C)

    if (delta < 0) {
        console.log("Não existe resultado")
        result = "Não existe resultado"
    } else if (delta > 0) {
        //realizando o cálculo
        const x1 = (-B + Math.sqrt(delta)) / (2 * A)
        const x2 = (-B - Math.sqrt(delta)) / (2 * A)
        //exibindo os resultados
        console.log(`2 Raizes, x'= ${x1}, x"=${x2}`)
        result = `2 Raizes, x'= ${x1}, x"=${x2}`
    } else {
        //realizando calculo
        const x = (-B - Math.sqrt(delta)) / (2 * A)
        console.log(`1 Raiz, x' = x" = ${x}`)   
        result = `1 Raiz, x' = x" = ${x}`    
    }
    //caso já exista uma conta ele deleta e gera o novo resultado
    const resultadoExistente = document.getElementById("resultado")
    //se existir ele remove
    if(resultadoExistente){
        resultadoExistente.remove()
    }

    console.log(resultadoExistente)

    //criar o atributo e colocar o valor
    const label = document.createElement('p')   
    
    //seta o id="resultado"
    label.setAttribute('id', 'resultado')

    //cria o texto
    const resultado = document.createTextNode(result)
    //coloca o resultado dentro da label
    label.appendChild(resultado)
    //coloca a label no root
    root.appendChild(label)

    //limpa os inputs
    valorA.value=""
    valorB.value=""
    valorC.value=""
}