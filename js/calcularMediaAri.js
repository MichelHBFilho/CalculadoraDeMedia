const botao = document.querySelector("#calcular-media");
const display = document.querySelector("#displayMedia");
botao.addEventListener("click", event => {
    let numeros = document.querySelectorAll(".numero");
    let inputs = document.querySelectorAll("input[type='text']");
    let total = 0;
    const nums = [];
    numeros.forEach(element => {
        nums.push(element.value);
    })
    nums.forEach(element => {
        total += parseInt(element);
    })
    total = total / nums.length;
    display.textContent = total;
    inputs.forEach(element => {
        element.value = "";
    })
})