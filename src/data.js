// esta é uma função de exemplo
// veja como agregamos a função ao objeto global window

const example = (value) => {
  document.getElementById("card").innerHTML = RICKANDMORTY.results[value].name;
};

window.example = example;
