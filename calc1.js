function calc() {
    //Variáveis que vão salvar os elementos dentro delas para serem manipulados posteriormente.
    var p1 = document.getElementById('i_peso').value
    var a1 = document.getElementById('i_alt').value
    var t1 = document.getElementById('text_bloco')
    //Conversão dos valores digitados pelo usuário nos elementos citado acima em número.
    var peso = Number(p1)
    var altura = Number(a1)
    //Variável que vai fazer o cálculo do IMC.
    var calc_imc = p1 / (a1 ** 2)
    //Conversão do valor do cálculo para número.
    var result = Number(calc_imc)

    //Estrutura condicional para definir a faixa de IMC que a pessoa se encaixa e mostrar uma mensagem personalizada na tela.
    if (result < 18.5) {
        t1.innerHTML = `Seu IMC: ${result.toFixed(2)} <br>Você está abaixo do peso.`
    } else if (result > 18.5 && result <= 24.9) {
        t1.innerHTML = `Seu IMC: ${result.toFixed(2)} <br>Você está com o peso normal.`
    } else if (result >= 24.91 && result <= 29.9) {
        t1.innerHTML = `Seu IMC: ${result.toFixed(2)} <br>Você está com sobrepeso.`
    } else if (result >= 29.91 && result <= 39.9) {
        t1.innerHTML = `Seu IMC: ${result.toFixed(2)} <br>Você está com obesidade!`
    } else {
        t1.innerHTML = `Seu IMC: ${result.toFixed(2)} <br>Você está com obesidade grave!`
    }
}