const botao = document.querySelector("#calcular-media");
const display = document.querySelector("#displayMedia");
botao.addEventListener("click", event => {
    let pesos = document.querySelectorAll(".peso");
    let numeros = document.querySelectorAll(".numero");
    let inputs = document.querySelectorAll("input[type='text']");
    const resultados = [];

    for (let i = 0; i<pesos.length; i++) {
        let peso = pesos[i].value;
        let numero = numeros[i].value;

        resultados.push(numero * (peso/10));
    }
    display.textContent = `Media: ${somarArrays(resultados)}`;

    console.log(inputs);

    for (let i = 0; i<inputs.length; i++) {
        inputs[i].value = '';
    }
})

function somarArrays(arr) {
    var soma = 0;

    for(var i = 0; i < arr.length; i++) {
        soma += arr[i];
    }

    console.log(soma);
    return soma;
}