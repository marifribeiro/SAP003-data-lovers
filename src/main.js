const main = document.getElementById("main");

const arr = getData(RICKANDMORTY.results);

const printCard = (obj, parentElement) => {
    // CRIA A DIV CARTÃO
    const card = document.createElement("div");
    card.setAttribute("class", "card");

    // CRIA A TAG IMG E ANEXA ELA NO CARTÃO
    const img = document.createElement("img");
    img.setAttribute("class", "card-img");
    img.src = "img/summer.jpeg" //obj.img;
    card.append(img);

    // CRIA A TAG LI DO NOME E ANEXA ELA NO CARTÃO
    const name = document.createElement("li");
    name.setAttribute("class", "card-name");
    name.innerHTML = obj.name;
    card.append(name);

    // CRIA AS DEMAIS LI'S E ADICIONA ELAS NO CARTÃO
    obj.info.map(item => {
      const list = document.createElement("li");
      list.setAttribute("class", "card-info");
      list.innerHTML = item;
      card.append(list);
    });

    parentElement.append(card);
};

arr.map(obj => printCard(obj, main));