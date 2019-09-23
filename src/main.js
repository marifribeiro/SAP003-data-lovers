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

card.render(data.sort(randOrd), main);

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

createDropdownMenu(filterRepeated(data, "origin"), dropdownOrigin);
createDropdownMenu(filterRepeated(data, "location"), dropdownLocation);
createDropdownMenu(filterRepeated(data, "status"), dropdownStatus);

dropdownStatus.addEventListener("click", function(e) {
  card.render(app.filter(data, "status", e.target.id).sort(randOrd), main);
  labelStatus.innerHTML = e.target.id;
  labelOrigin.style.cssText = "width: auto;";
  labelOrigin.innerHTML = "Origin";
  labelLocation.innerHTML = "Last location";
  filterInfo.innerHTML = `SHOWING ONLY CHARACTERS WITH STATUS <span>${e.target.id.toUpperCase()}</span>`;
  statistics.innerHTML = `${parseInt(app.getStatistics(data, "status", e.target.id))}% of the characters ${e.target.id === "unknown" ? "have status unkown" : `are ${e.target.id.toLowerCase()}`}`;
});

dropdownOrigin.addEventListener("click", function(e) {
  card.render(app.filter(data, "origin", e.target.id).sort(randOrd), main);
  labelOrigin.innerHTML = e.target.id;
  labelOrigin.style.cssText = "width: auto;";
  labelStatus.innerHTML = "Status";
  labelLocation.innerHTML = "Last location";
  filterInfo.innerHTML = `SHOWING ONLY CHARACTERS FROM <span>${e.target.id.toUpperCase()}</span>`;
  statistics.innerHTML = `${app.getStatistics(data, "origin", e.target.id).toFixed(2)}% of the characters are from ${e.target.id.toLowerCase()}`;
});

dropdownLocation.addEventListener("click", function(e) {
  card.render(app.filter(data, "location", e.target.id).sort(randOrd), main);
  labelLocation.innerHTML = e.target.id;
  labelOrigin.style.cssText = "width: auto;";
  labelStatus.innerHTML = "Status";
  labelOrigin.innerHTML = "Origin";
  filterInfo.innerHTML = `SHOWING ONLY CHARACTERS AT <span>${e.target.id.toUpperCase()}</span>`;
  statistics.innerHTML = `${app.getStatistics(data, "location", e.target.id).toFixed(2)}% of the characters are at ${e.target.id.toLowerCase()}`;
});

btnSearch.addEventListener("click", function(e) {
  card.render(app.searchName(data, typedText.value), main);
  filterInfo.innerHTML = "";
  statistics.innerHTML = "";
  typedText.value = "";
});

function randOrd() {
  return (Math.round(Math.random()));
}

btnAlphabeticalOrder.addEventListener("click", function(e) {
  card.render(app.alphabeticalOrder(data), main);
});