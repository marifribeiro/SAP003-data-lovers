const main = document.getElementById("main");
const filterInfo = document.getElementById("filter");
const dropdownOrigin = document.getElementById("origin");
const dropdownLocation = document.getElementById("location");
const dropdownStatus = document.getElementById("status");
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

const createDropdownMenu = (arr, parentElement) => {
  arr.map(origin => {
    const option = document.createElement("option");
    option.innerHTML = origin;
    option.value = origin;
    parentElement.append(option);
  });
};

const dropdownEvent = (currentMenu, toSearch, toDefault1, toDefault2) => { //melhorar o nome dessa função
  printCard(app.filter(data, toSearch, currentMenu.value), main);
  toDefault1.value = "default";
  toDefault2.value = "default";
};

const getStatistics = (arr, status, condition) => {
  let filter = app.filter(arr, status, condition);
  let percentage = (filter.length * 100) / 493;
  return percentage;
};

printCard(data, main);
createDropdownMenu(filterRepeated(data, "origin"), dropdownOrigin);
createDropdownMenu(filterRepeated(data, "location"), dropdownLocation);
createDropdownMenu(filterRepeated(data, "status"), dropdownStatus);

dropdownStatus.addEventListener("change", function() {dropdownEvent(dropdownStatus, "status", dropdownLocation, dropdownOrigin);
  filterInfo.innerHTML = `SHOWING ONLY <span>${dropdownStatus.value.toUpperCase()}</span> CHARACTERS</span>`;
  statistics.innerHTML = `${getStatistics(data, "status", dropdownStatus.value)}% of the characters are${dropdownStatus.value}`
});

dropdownOrigin.addEventListener("change", function() {dropdownEvent(dropdownOrigin, "origin", dropdownStatus, dropdownLocation);
  filterInfo.innerHTML = `SHOWING ONLY CHARACTERS WHOSE <span>ORIGIN</span> IS <span>${dropdownOrigin.value.toUpperCase()}</span>`;
});

dropdownLocation.addEventListener("change", function() {dropdownEvent(dropdownLocation, "location", dropdownStatus, dropdownOrigin);
  filterInfo.innerHTML = `SHOWING ONLY CHARACTERS WHOSE <span>LAST LOCATION</span> WAS <span>${dropdownLocation.value.toUpperCase()}</span>`;
});
