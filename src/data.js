// esta é uma função de exemplo
// veja como agregamos a função ao objeto global window

const printName = (parentElement) => {
  RICKANDMORTY.results.map(value => {

    let info = [value.image, value.name, value.status, value.origin.name, value.location.name];

    const card = document.createElement("div");
    card.setAttribute("class", "card");

    info.map(item => {
      const list = document.createElement("li");
      list.setAttribute("class", "card-info");
      list.innerHTML = item;
      card.append(list);
    });

    parentElement.append(card);
  });
};

window.printName = printName;