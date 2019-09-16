const main = document.getElementById("main");
const cardInfo = window.getData(RICKANDMORTY.results);

const createCard = () => {
  const card = document.createElement("div");
  card.setAttribute("class", "card");
  return card;
};

const createProfileImage = obj => {
  const img = document.createElement("img");
  img.setAttribute("class", "card-img");
  img.src = "img/summer.jpeg"; //obj.image; 
  return img;
};

const createName = obj => {
  const name = document.createElement("div");
  name.setAttribute("class", "card-name");
  name.innerHTML = obj.name.toUpperCase();
  return name;
};

const createDetails = arr => {
  return arr.map(item => {
    const li = document.createElement("li");
    li.setAttribute("class", "card-info");
    li.innerHTML = item;
    return li;
  });
};

const printCard = (obj, parentElement) => {
  return obj.map(item => {
    const card = createCard();
    card.append(createProfileImage(item));
    card.append(createName(item));
    const details = createDetails(item.details);
    details.forEach(element => {
      card.append(element);
    });

    parentElement.append(card);
  });
};

printCard(cardInfo, main);