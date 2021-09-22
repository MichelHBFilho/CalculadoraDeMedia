let btn = document.querySelector("#menos-um");
btn.addEventListener("click", event => {
    let ultimoFator = document.querySelector("tbody tr:last-child");

    ultimoFator.parentNode.removeChild(ultimoFator);
})