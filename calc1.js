function calc() {
    var p1 = document.getElementById('i_peso').value
    var a1 = document.getElementById('i_alt').value
    var peso = Number(p1)
    var altura = Number(a1)
    var calc_imc = p1 / (a1 ** 2)
    var result = Number(calc_imc)
    var t1 = document.getElementById('text_bloco')

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