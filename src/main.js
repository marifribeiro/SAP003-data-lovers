const main = document.getElementById("main");
const data = window.getData(window.RICKANDMORTY.results);
const filterInfo = document.getElementById("filter");
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

printCard(data, main);
createList(filterRepeated(data, "origin"), dropdownOrigin);
createList(filterRepeated(data, "location"), dropdownLocation);
createList(filterRepeated(data, "status"), dropdownStatus);

dropdownStatus.addEventListener("change", function() {
  printCard(window.filter(data, "status", dropdownStatus.value), main);
  dropdownOrigin.value = "default";
  dropdownLocation.value = "default";
  //dropdownStatus.clientWidth > 100 ? dropdownStatus.style.cssText = `width: ${dropdownStatus.clientWidth}` : false;
  filterInfo.innerHTML = `SHOWING ONLY CHARACTERS WITH <span>STATUS ${dropdownStatus.value.toUpperCase()}</span>`;
});

dropdownOrigin.addEventListener("change", function() {
  printCard(window.filter(data, "origin", dropdownOrigin.value), main);
  dropdownStatus.value = "default";
  dropdownLocation.value = "default";
  if (dropdownOrigin.clientWidth > 100) {
    dropdownOrigin.style.cssText = "width: auto";
  }
  filterInfo.innerHTML = `SHOWING ONLY CHARACTERS WHOSE <span>ORIGIN</span> IS <span>${dropdownOrigin.value.toUpperCase()}</span>`;
});

dropdownLocation.addEventListener("change", function() {
  printCard(window.filter(data, "location", dropdownLocation.value), main);
  dropdownOrigin.value = "default";
  dropdownStatus.value = "default";
  filterInfo.innerHTML = `SHOWING ONLY CHARACTERS WHOSE <span>LAST LOCATION</span> WAS <span>${dropdownLocation.value.toUpperCase()}</span>`;
});