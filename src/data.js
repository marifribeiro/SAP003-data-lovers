// esta é uma função de exemplo
// veja como agregamos a função ao objeto global window

const printName = (parentElement) => {
  RICKANDMORTY.results.map(value => {

    let info = [value.name, value.status, value.origin.name, value.location.name];
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    card.innerHTML = info;
    parentElement.append(card);
  });
};

window.printName = printName;