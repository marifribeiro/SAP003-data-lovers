const toInternal = value => {
  return {
    image: value.image,
    name: value.name,
    details: [`<span>Status: </span>${value.status}`, `<span>Origin: </span>${value.origin.name}`, `<span>Last Location: </span>${value.location.name}`]
  };
};

const getData = (arr) => {
  return arr.map(toInternal);
};

window.getData = getData;