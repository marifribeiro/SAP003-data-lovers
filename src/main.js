const main = document.getElementById("main");
const filterInfo = document.getElementById("filter");
const all = document.getElementById("all");
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

const createDropdownMenu = (arr, parentElement) => {
  parentElement.innerHTML += arr.map(value => `<li id="${value}">${value}</li>`).join("");
};

const openNav = () => {
  if (navbar.className === "navbar") {
    navbar.className += " mobile-menu";
    menuBtn.innerHTML = "&#x2190;";
  } else {
    navbar.className = "navbar";
    menuBtn.innerHTML = "&#9776;";
  }
};

const checkbox = arr => {
  btnAlphabeticalOrder.checked = false;
  btnAlphabeticalOrder.addEventListener("click", function(e) {
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
    const obj = data[Math.floor(Math.random() * 492 + 1)];
    arr.push(obj);
  };
  return arr;
};

const initial = (arr) => {
  checkbox(arr);
  card.render(arr.sort(randOrd), main);
};

const randOrd = () => Math.round(Math.random())-0.5;

createDropdownMenu(app.removeDuplicates(data, "origin"), dropdownOrigin);
createDropdownMenu(app.removeDuplicates(data, "location"), dropdownLocation);
createDropdownMenu(app.removeDuplicates(data, "status"), dropdownStatus);

document.addEventListener("DOMContentLoaded", () => initial(getEightCards()), false);

all.addEventListener("click", function(e) {
  initial(data);
  openNav();
});

dropdownStatus.addEventListener("click", function(e) {
  if (e.target && e.target.matches("li")) openNav();
  const filterStatus = app.filter(data, "status", e.target.id);
  card.render(filterStatus.sort(randOrd), main);
  labelStatus.innerHTML = e.target.id;
  labelOrigin.style.cssText = "width: auto;";
  labelOrigin.innerHTML = "Origin";
  labelLocation.innerHTML = "Last location";
  filterInfo.innerHTML = `SHOWING ONLY CHARACTERS WITH STATUS <span>${e.target.id.toUpperCase()}</span>`;
  statistics.innerHTML = `${parseInt(app.getStatistics(data, filterStatus))}% of the characters ${e.target.id === "unknown" ? "have status unkown" : `are ${e.target.id.toLowerCase()}`}`;
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
  statistics.innerHTML = `${app.getStatistics(data, filterOrigin).toFixed(2)}% of the characters are from ${e.target.id.toLowerCase()}`;
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
  statistics.innerHTML = `${app.getStatistics(data, filterLocation).toFixed(2)}% of the characters are at ${e.target.id.toLowerCase()}`;
  checkbox(filterLocation);
});

menuBtn.addEventListener("click", openNav);

btnSearch.addEventListener("click", function(e) {
  e.preventDefault();
  const searchInData = app.searchName(data, typedText.value);
  card.render(searchInData.sort(randOrd), main);
  statistics.innerHTML = `${app.getStatistics(data, searchInData).toFixed(2)}% of the characters have "${typedText.value.toLowerCase()}" in their name`;
  filterInfo.innerHTML = "";
  typedText.value = "";
  checkbox(searchInData);
  openNav();
});