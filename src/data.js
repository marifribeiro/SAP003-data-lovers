// esta é uma função de exemplo
// veja como agregamos a função ao objeto global window

const printName = (parentElement) => {
  RICKANDMORTY.results.map(value => {

    let info = [`<span>Status: </span>${value.status}`, 
    `<span>Origin: </span>${value.origin.name}`, 
    `<span>Last Location: </span>${value.location.name}`];

    const card = document.createElement("div");
    card.setAttribute("class", "card");

    let linkImg = value.image;
    const img = document.createElement("img");
    img.setAttribute("class", "card-img");
    img.src = "img/summer.jpeg";
    card.append(img);

    let linkName = value.name
    const name = document.createElement("li");
    name.setAttribute("class", "card-name");
    name.innerHTML = linkName;
    card.append(name);

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