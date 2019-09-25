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

const getStatistics = (arr, status, condition) => {
  let filter = app.filter(arr, status, condition);
  let percentage = (filter.length * 100) / 493;
  return percentage;
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

app = {
  getData,
  toInternal,
  filter,
  getStatistics,
  filterRepeated
};
