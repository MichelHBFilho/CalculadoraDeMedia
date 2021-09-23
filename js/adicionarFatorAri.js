botaoMaisUm = document.querySelector("#mais-um");

botaoMaisUm.addEventListener("click", event => {
    criarNovaRow();
    console.log("hello")
})

const tbody = document.querySelector("tbody");

function criarNovaRow() {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let inputNumero = document.createElement("input");
    inputNumero.setAttribute("type", "text");
    inputNumero.setAttribute("placeholder", "Insira um numero");
    inputNumero.classList.add("numero");
    td1.appendChild(inputNumero);
    tr.appendChild(td1);
    tbody.appendChild(tr);
}