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

const render = (arr, parentElement) => {
  parentElement.innerHTML = "";
  return arr.map(item => {
    const card = createCard();
    card.append(createProfileImage(item));
    card.append(createName(item));
    card.append(createDetails(item));
    parentElement.append(card);
  });
};

card = {
  render,
};
