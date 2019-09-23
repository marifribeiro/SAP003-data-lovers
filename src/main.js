const main = document.getElementById("main");
const filterInfo = document.getElementById("filter");
const dropdownOrigin = document.getElementById("origin");
const dropdownLocation = document.getElementById("location");
const dropdownStatus = document.getElementById("status");
const labelStatus = document.getElementById("label-status");
const labelLocation = document.getElementById("label-location");
const labelOrigin = document.getElementById("label-origin");
const statistics = document.getElementById("statistics");
const data = app.getData(window.RICKANDMORTY.results);

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

const createDropdownMenu = (arr, parentElement) => {
  parentElement.innerHTML += arr.map(value => `<li id="${value}">${value}</li>`).join("");
};

const dropdownEvent = (e, toSearch, toDefault1, toDefault2) => { //melhorar o nome dessa função
  
};

printCard(data, main);
createDropdownMenu(filterRepeated(data, "origin"), dropdownOrigin);
createDropdownMenu(filterRepeated(data, "location"), dropdownLocation);
createDropdownMenu(filterRepeated(data, "status"), dropdownStatus);

dropdownStatus.addEventListener("click", function(e) {
  printCard(app.filter(data, "status", e.target.id), main);
  labelStatus.innerHTML = e.target.id;
  labelOrigin.style.cssText = "width: auto;";
  labelOrigin.innerHTML = "Origin";
  labelLocation.innerHTML = "Last location";
  filterInfo.innerHTML = `SHOWING ONLY CHARACTERS WITH STATUS <span>${e.target.id.toUpperCase()}</span>`;
  statistics.innerHTML = `${parseInt(app.getStatistics(data, "status", e.target.id))}% of the characters ${e.target.id === "unknown" ? "have status unkown" : `are ${e.target.id.toLowerCase()}`}`;
});

dropdownOrigin.addEventListener("click", function(e) {
  printCard(app.filter(data, "origin", e.target.id), main);
  labelOrigin.innerHTML = e.target.id;
  labelOrigin.style.cssText = "width: auto;";
  labelStatus.innerHTML = "Status";
  labelLocation.innerHTML = "Last location";
  filterInfo.innerHTML = `SHOWING ONLY CHARACTERS FROM <span>${e.target.id.toUpperCase()}</span>`;
  statistics.innerHTML = `${app.getStatistics(data, "origin", e.target.id).toFixed(2)}% of the characters are from ${e.target.id.toLowerCase()}`;
});

dropdownLocation.addEventListener("click", function(e) {
  printCard(app.filter(data, "location", e.target.id), main);
  labelLocation.innerHTML = e.target.id;
  labelOrigin.style.cssText = "width: auto;";
  labelStatus.innerHTML = "Status";
  labelOrigin.innerHTML = "Origin";
  filterInfo.innerHTML = `SHOWING ONLY CHARACTERS AT <span>${e.target.id.toUpperCase()}</span>`;
  statistics.innerHTML = `${app.getStatistics(data, "location", e.target.id).toFixed(2)}% of the characters are at ${e.target.id.toLowerCase()}`;
});