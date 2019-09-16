const main = document.getElementById("main");
const data = window.getData(RICKANDMORTY.results);
const dropdownOrigin = document.getElementById("origin");

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

const createDetails = obj => {
  const ul = document.createElement("ul");
  ul.setAttribute("class", "card-info");
  ul.innerHTML += `<li><span>Status</span>${obj.status}</li>`;
  ul.innerHTML += `<li><span>Origin</span>${obj.origin}</li>`;
  ul.innerHTML += `<li><span>Location</span>${obj.location}</li>`;
  return ul;
};

const printCard = (arr, parentElement) => {
  return arr.map(item => {
    const card = createCard();
    card.append(createProfileImage(item));
    card.append(createName(item));
    card.append(createDetails(item));

    parentElement.append(card);
  });
};

const filterOrigin = arr => {
  const originLocations = [];
  arr.map(item => {
    if (!originLocations.includes(item.origin)) {
      originLocations.push(item.origin);
    } else {
      return false;
    }
  });
  return originLocations;
};

const createOriginList = (parentElement) => {
  const option = document.createElement("option");
  option.innerHTML = "worked!";
  option.value = "worked";
  parentElement.append(option);
};

printCard(data, main);
console.log(filterOrigin(data));