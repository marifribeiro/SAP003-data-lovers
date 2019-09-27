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
const checkbox = document.getElementById("alphabetical-order");
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

const sortCards = arr => {
  if (checkbox.checked) {
    card.render(app.alphabeticalOrder(arr), main);
  } else {
    card.render(arr.sort(randOrd), main);
  };
};

const getEightCards = () => {
  const length = data.length - 1;
  return Array.from({length: 8}).map(item => data[Math.floor(Math.random() * data.length + 1)]);
};

const initial = (arr) => {
  card.render(arr.sort(randOrd), main);
};

const randOrd = () => Math.round(Math.random())-0.5;

createDropdownMenu(app.removeDuplicates(data, "origin"), dropdownOrigin);
createDropdownMenu(app.removeDuplicates(data, "location"), dropdownLocation);
createDropdownMenu(app.removeDuplicates(data, "status"), dropdownStatus);

var list = getEightCards();
document.addEventListener("DOMContentLoaded", () => initial(list), false);

all.addEventListener("click", function(e) {
  initial(data);
  list = data;
  checkbox.checked = false;
  filterInfo.innerHTML = "SHOWING ALL CHARACTERS";
  statistics.innerHTML = "";
  openNav();
});

dropdownStatus.addEventListener("click", function(e) {
  openNav();
  const filterStatus = app.filter(data, "status", e.target.id);
  card.render(filterStatus.sort(randOrd), main);
  labelStatus.innerHTML = e.target.id;
  checkbox.checked = false;
  labelOrigin.style.cssText = "width: auto;";
  labelOrigin.innerHTML = "Origin";
  labelLocation.innerHTML = "Last location";
  filterInfo.innerHTML = `SHOWING ONLY CHARACTERS WITH STATUS <span>${e.target.id.toUpperCase()}</span>`;
  statistics.innerHTML = `${parseInt(app.getStatistics(data, filterStatus))}% of the characters ${e.target.id === "unknown" ? "have status unkown" : `are ${e.target.id.toLowerCase()}`}`;
  list = filterStatus;
});

dropdownOrigin.addEventListener("click", function(e) {
  openNav();
  const filterOrigin = app.filter(data, "origin", e.target.id);
  card.render(filterOrigin.sort(randOrd), main);
  labelOrigin.innerHTML = e.target.id;
  checkbox.checked = false;
  labelOrigin.style.cssText = "width: auto;";
  labelStatus.innerHTML = "Status";
  labelLocation.innerHTML = "Last location";
  filterInfo.innerHTML = `SHOWING ONLY CHARACTERS FROM <span>${e.target.id.toUpperCase()}</span>`;
  statistics.innerHTML = `${app.getStatistics(data, filterOrigin).toFixed(2)}% of the characters are from ${e.target.id.toLowerCase()}`;
  list = filterOrigin;
});

dropdownLocation.addEventListener("click", function(e) {
  openNav();
  const filterLocation = app.filter(data, "location", e.target.id);
  card.render(filterLocation.sort(randOrd), main);
  labelLocation.innerHTML = e.target.id;
  checkbox.checked = false;
  labelOrigin.style.cssText = "width: auto;";
  labelStatus.innerHTML = "Status";
  labelOrigin.innerHTML = "Origin";
  filterInfo.innerHTML = `SHOWING ONLY CHARACTERS AT <span>${e.target.id.toUpperCase()}</span>`;
  statistics.innerHTML = `${app.getStatistics(data, filterLocation).toFixed(2)}% of the characters are at ${e.target.id.toLowerCase()}`;
  list = filterLocation;
});

menuBtn.addEventListener("click", openNav);

btnSearch.addEventListener("click", function(e) {
  e.preventDefault();
  openNav();
  const searchInData = app.searchName(data, typedText.value);
  main.innerHTML = "";
  labelStatus.innerHTML = "Status";
  labelOrigin.innerHTML = "Origin";
  labelLocation.innerHTML = "Last location";
  checkbox.checked = false;
  list = searchInData;

  if (typedText.value === "" || typedText.value === " ") {
    filterInfo.innerHTML = "Whoops, I think I slipped on my keyboard, Morty.";
    typedText.value = "";
    statistics.innerHTML = "";
  } else if (searchInData.length === 0) {
    filterInfo.innerHTML = "Who the fuck is that? I don't know anyone with that name, Morty.";
    typedText.value = "";
    statistics.innerHTML = "";
  } else {
    card.render(searchInData.sort(randOrd), main);
    statistics.innerHTML = `${app.getStatistics(data, searchInData).toFixed(2)}% of the characters have "${typedText.value.toLowerCase()}" in their name`;
    filterInfo.innerHTML = "";
    typedText.value = "";
  }
});

checkbox.checked = false;
checkbox.addEventListener("click", () => {
  sortCards(list);
  openNav();
});