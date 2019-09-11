//let filter = document.getElementById("filter");
let button = document.getElementById("button");
let main = document.getElementById("main");

function callPrintName() {
  window.printName(main);
}

button.addEventListener("click", callPrintName);