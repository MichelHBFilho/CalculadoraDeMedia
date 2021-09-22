botaoMaisUm = document.querySelector("#mais-um");

botaoMaisUm.addEventListener("click", event => {
    criarNovaRow();
    console.log("hello")
})

const tbody = document.querySelector("tbody");

function criarNovaRow() {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    let td2 = document.createElement("td");

    let inputNumero = document.createElement("input");
    let inputPeso = document.createElement("input");

    inputNumero.setAttribute("type", "text");
    inputNumero.setAttribute("placeholder", "Insira um numero");
    inputNumero.classList.add("numero");

    inputPeso.setAttribute("type", "text");
    inputPeso.setAttribute("placeholder", "Insira o peso")
    inputPeso.classList.add("peso");

    td1.appendChild(inputNumero);
    td2.appendChild(inputPeso);

    tr.appendChild(td1);
    tr.appendChild(td2);

    tbody.appendChild(tr);
    
}