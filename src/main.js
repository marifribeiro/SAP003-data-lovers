const main = document.getElementById("main");
const data = window.getData(window.RICKANDMORTY.results);
const dropdownOrigin = document.getElementById("origin");
const dropdownLocation = document.getElementById("location");
const dropdownStatus = document.getElementById("status");

const createCard = () => {
  const card = document.createElement("div");
  card.setAttribute("class", "card");
  return card;
};

const createProfileImage = obj => {
  const img = document.createElement("img");
  img.setAttribute("class", "card-img");
  img.src = obj.image; //"img/summer.jpeg";
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
  parentElement.innerHTML = "";
  return arr.map(item => {
    const card = createCard();
    card.append(createProfileImage(item));
    card.append(createName(item));
    card.append(createDetails(item));

    parentElement.append(card);
  });
};

const filterRepeated = (arr, condition) => {
  const list = [];
  arr.map(item => {
    if (!list.includes(item[condition])) {
      list.push(item[condition]);
    } else {
      return false;
    }
  });
  return list.sort();
};

const createList = (arr, parentElement) => {
  arr.map(origin => {
    const option = document.createElement("option");
    option.innerHTML = origin;
    option.value = origin;
    parentElement.append(option);
  });
};

const filter = (arr, value, condition) =>{
  return arr.filter(item => {
    return item[value] === condition;
  });
};

printCard(data, main);
createList(filterRepeated(data, "origin"), dropdownOrigin);
createList(filterRepeated(data, "location"), dropdownLocation);
createList(filterRepeated(data, "status"), dropdownStatus);

dropdownStatus.addEventListener("change", function() {
  printCard(filter(data, "status", dropdownStatus.value), main);
});

dropdownOrigin.addEventListener("change", function() {
  printCard(filter(data, "origin", dropdownOrigin.value), main);
});

dropdownLocation.addEventListener("change", function() {
  printCard(filter(data, "location", dropdownLocation.value), main);
});