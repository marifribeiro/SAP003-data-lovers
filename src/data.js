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
  return arr.map(obj => toInternal(obj));
};

const filter = (arr, value, condition) =>{
  return arr.filter(item => {
    return item[value] === condition;
  });
};

app = {
  getData,
  toInternal,
  filter
};

// "htmlhint": "htmlhint src/*.html test/*.html",
// "eslint": "eslint --ext .js src/ test/",
// "pretest": "npm run eslint && npm run htmlhint",
