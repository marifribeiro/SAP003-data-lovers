const getData = (arr) => {

  const data = [];

  arr.map(value => {

    const obj = {
      img: value.image,
      name: value.name,
      info: [`<span>Status: </span>${value.status}`, 
      `<span>Origin: </span>${value.origin.name}`, 
      `<span>Last Location: </span>${value.location.name}`]
    }
    
    data.push(obj);

  });

  return data;
};

window.getData = getData;