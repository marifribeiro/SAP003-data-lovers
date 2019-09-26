const main = document.getElementById("main");
const filterInfo = document.getElementById("filter");
const dropdownOrigin = document.getElementById("origin");
const dropdownLocation = document.getElementById("location");
const dropdownStatus = document.getElementById("status");
const labelStatus = document.getElementById("label-status");
const labelLocation = document.getElementById("label-location");
const labelOrigin = document.getElementById("label-origin");
const statistics = document.getElementById("statistics");
const typedText = document.getElementById("typed-text");
const btnSearch = document.getElementById("search-btn");
const btnAlphabeticalOrder = document.getElementById("alphabetical-order");
const data = app.getData(window.RICKANDMORTY.results);
const menuBtn = document.getElementById("menu-btn");

const start = () => {
  return initial(getEightCards());
};

const initial = arr => {
  checkbox(arr);
  card.render(arr, main);
};

const createDropdownMenu = (arr, parentElement) => {
  parentElement.innerHTML += arr.map(value => `<li id="${value}">${value}</li>`).join("");
};

const openNav = () => {
  if (navbar.className === "navbar") {
    navbar.className += " mobile-menu";
    menuBtn.innerHTML = "&#x2190;";
  } else {[{name: "Rick Sanchez"}, {name: "Morty Smith"}, {name: "Beth Smith"}, {name: "Rick Sanchez"}, {name: "Morty Smith"}];
    navbar.className = "navbar";
    menuBtn.innerHTML = "&#9776;";
  }
};

const randOrd = () => (Math.round(Math.random())-0.5);
const getRandom = max => Math.floor(Math.random() * max + 1);

const checkbox = arr => {
  btnAlphabeticalOrder.checked = false;
  btnAlphabeticalOrder.addEventListener("click", function() {
    if (btnAlphabeticalOrder.checked) {
      card.render(app.alphabeticalOrder(arr), main);
      openNav();
    } else {
      card.render(arr.sort(randOrd), main);
      openNav();
    };
  });
};

const getEightCards = () => {
  const arr = [];
  for (let i =0; i < 8; i++) {
    const obj = data[getRandom(493)];
    arr.push(obj);
  };
  return arr;
};

//card.render(data, main);
createDropdownMenu(app.filterRepeated(data, "origin"), dropdownOrigin);
createDropdownMenu(app.filterRepeated(data, "location"), dropdownLocation);
createDropdownMenu(app.filterRepeated(data, "status"), dropdownStatus);

dropdownStatus.addEventListener("click", function(e) {
  if (e.target && e.target.matches("li")) openNav();
  const filterStatus = app.filter(data, "status", e.target.id);
  card.render(filterStatus.sort(randOrd), main);
  labelStatus.innerHTML = e.target.id;
  labelOrigin.style.cssText = "width: auto;";
  labelOrigin.innerHTML = "Origin";
  labelLocation.innerHTML = "Last location";
  filterInfo.innerHTML = `SHOWING ONLY CHARACTERS WITH STATUS <span>${e.target.id.toUpperCase()}</span>`;
  statistics.innerHTML = `${parseInt(app.getStatistics(data, "status", e.target.id))}% of the characters ${e.target.id === "unknown" ? "have status unkown" : `are ${e.target.id.toLowerCase()}`}`;
  checkbox(filterStatus);
});

dropdownOrigin.addEventListener("click", function(e) {
  if (e.target && e.target.matches("li")) openNav();
  const filterOrigin = app.filter(data, "origin", e.target.id);
  card.render(filterOrigin.sort(randOrd), main);
  labelOrigin.innerHTML = e.target.id;
  labelOrigin.style.cssText = "width: auto;";
  labelStatus.innerHTML = "Status";
  labelLocation.innerHTML = "Last location";
  filterInfo.innerHTML = `SHOWING ONLY CHARACTERS FROM <span>${e.target.id.toUpperCase()}</span>`;
  statistics.innerHTML = `${app.getStatistics(data, "origin", e.target.id).toFixed(2)}% of the characters are from ${e.target.id.toLowerCase()}`;
  checkbox(filterOrigin);
});

dropdownLocation.addEventListener("click", function(e) {
  if (e.target && e.target.matches("li")) openNav();
  const filterLocation = app.filter(data, "location", e.target.id);
  card.render(filterLocation.sort(randOrd), main);
  labelLocation.innerHTML = e.target.id;
  labelOrigin.style.cssText = "width: auto;";
  labelStatus.innerHTML = "Status";
  labelOrigin.innerHTML = "Origin";
  filterInfo.innerHTML = `SHOWING ONLY CHARACTERS AT <span>${e.target.id.toUpperCase()}</span>`;
  statistics.innerHTML = `${app.getStatistics(data, "location", e.target.id).toFixed(2)}% of the characters are at ${e.target.id.toLowerCase()}`;
  checkbox(filterLocation);
});

menuBtn.addEventListener("click", openNav);

btnSearch.addEventListener("click", function(e) {
  e.preventDefault();
  const searchInData = app.searchName(data, typedText.value);
  card.render(searchInData.sort(randOrd), main);
  filterInfo.innerHTML = "";
  statistics.innerHTML = "";
  typedText.value = "";
  checkbox(searchInData);
  openNav();
});