let filter = document.getElementById("filter");
let button = document.getElementById("button");

function callFilter () {
  window.example(+filter.value);
}

button.addEventListener("click", callFilter);