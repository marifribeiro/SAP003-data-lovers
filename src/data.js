const toInternal = value => {
  return {
    image: value.image,
    name: value.name,
    status: value.status, 
    origin: value.origin.name, 
    location: value.location.name
  };
};

const getData = (arr) => {
  return arr.map(toInternal);
};

const filter = (arr, value, condition) =>{
  return arr.filter(item => {
    return item[value] === condition;
  });
};

window.getData = getData;
window.toInternal = toInternal;
window.filter = filter;