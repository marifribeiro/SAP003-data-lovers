// esta é uma função de exemplo
// veja como agregamos a função ao objeto global window

const printName = (parentElement) => {
  RICKANDMORTY.results.map(value => {

    let info = [value.name, value.status, value.origin.name, value.location.name];

    const card = document.createElement("div");
    card.setAttribute("class", "card");

    let linkImg = value.image;
    const img = document.createElement("img");
    img.setAttribute("class", "card-img");
    img.src = //linkImg
    card.append(img);

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