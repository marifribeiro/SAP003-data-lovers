// esta é uma função de exemplo
// veja como agregamos a função ao objeto global window

const printName = (parentElement) => {
  RICKANDMORTY.results.map(value => {

    let info = [value.name, value.status, value.origin.name, value.location.name];
    
    const card = document.createElement("div");
    card.setAttribute("class", "card");

    info.map(item => {
      const lista = document.createElement("li");
      lista.innerHTML = item;
      card.append(lista);
    });

    parentElement.append(card);
  });
};

window.printName = printName;