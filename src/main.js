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

card.render(data, main);
createDropdownMenu(app.filterRepeated(data, "origin"), dropdownOrigin);
createDropdownMenu(app.filterRepeated(data, "location"), dropdownLocation);
createDropdownMenu(app.filterRepeated(data, "status"), dropdownStatus);

dropdownStatus.addEventListener("click", function(e) {
  if (e.target && e.target.matches("li")) openNav();
  card.render(app.filter(data, "status", e.target.id), main);
  labelStatus.innerHTML = e.target.id;
  labelOrigin.style.cssText = "width: auto;";
  labelOrigin.innerHTML = "Origin";
  labelLocation.innerHTML = "Last location";
  filterInfo.innerHTML = `SHOWING ONLY CHARACTERS WITH STATUS <span>${e.target.id.toUpperCase()}</span>`;
  statistics.innerHTML = `${parseInt(app.getStatistics(data, "status", e.target.id))}% of the characters ${e.target.id === "unknown" ? "have status unkown" : `are ${e.target.id.toLowerCase()}`}`;
});

dropdownOrigin.addEventListener("click", function(e) {
  if (e.target && e.target.matches("li")) openNav();
  card.render(app.filter(data, "origin", e.target.id), main);
  labelOrigin.innerHTML = e.target.id;
  labelOrigin.style.cssText = "width: auto;";
  labelStatus.innerHTML = "Status";
  labelLocation.innerHTML = "Last location";
  filterInfo.innerHTML = `SHOWING ONLY CHARACTERS FROM <span>${e.target.id.toUpperCase()}</span>`;
  statistics.innerHTML = `${app.getStatistics(data, "origin", e.target.id).toFixed(2)}% of the characters are from ${e.target.id.toLowerCase()}`;
});

dropdownLocation.addEventListener("click", function(e) {
  if (e.target && e.target.matches("li")) openNav();
  card.render(app.filter(data, "location", e.target.id), main);
  labelLocation.innerHTML = e.target.id;
  labelOrigin.style.cssText = "width: auto;";
  labelStatus.innerHTML = "Status";
  labelOrigin.innerHTML = "Origin";
  filterInfo.innerHTML = `SHOWING ONLY CHARACTERS AT <span>${e.target.id.toUpperCase()}</span>`;
  statistics.innerHTML = `${app.getStatistics(data, "location", e.target.id).toFixed(2)}% of the characters are at ${e.target.id.toLowerCase()}`;
});

menuBtn.addEventListener("click", openNav);