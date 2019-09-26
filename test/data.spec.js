require("../src/data.js");

describe("toInternal", () => {
  it("is a function", () => {
    expect(typeof app.toInternal).toBe("function");
  });

  it("returns a smaller object", () => {
    expect(app.toInternal({
      "name": "Rick Sanchez",
      "status": "Alive",
      "type": "",
      "gender": "Male",
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      "location": {"name": "Earth (Replacement Dimension)"},
      "origin": {"name": "Earth (C-137)"}
    }))
      .toEqual({
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg", 
        name: "Rick Sanchez", 
        status: "Alive", 
        origin: "Earth (C-137)", 
        location: "Earth (Replacement Dimension)"});
  });

  it("returns an object", () => {
    expect(typeof app.toInternal({
      "name": "Rick Sanchez",
      "status": "Alive",
      "type": "",
      "gender": "Male",
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      "location": {"name": "Earth (Replacement Dimension)"},
      "origin": {"name": "Earth (C-137)"}
    }))
      .toBe("object");
  });
});

describe("getData", () => {
  it("is a function", () => {
    expect(typeof app.getData).toBe("function");
  });

  it("returns an array of smaller objects", () => {
    expect(app.getData([{
      "name": "Rick Sanchez",
      "status": "Alive",
      "type": "",
      "gender": "Male",
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      "location": {"name": "Earth (Replacement Dimension)"},
      "origin": {"name": "Earth (C-137)"}}]
    ))
      .toEqual([{
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg", 
        name: "Rick Sanchez", 
        status: "Alive", 
        origin: "Earth (C-137)", 
        location: "Earth (Replacement Dimension)"}]);
  });
});

describe("filter", () => {
  it("is a function", () => {
    expect(typeof app.filter).toBe("function");
  });

  it("returns only characters with status alive", () => {
    expect(app.filter([{"name": "Rick Sanchez", "status": "Alive"}, 
      {"name": "Albert Einstein", "status": "Dead"}], "status", "Alive"
    ))
      .toEqual([{name: "Rick Sanchez", status: "Alive"}]);
  });
});

describe("getStatistics", () => {
  it("is a function", () => {
    expect(typeof app.getStatistics).toBe("function");
  });

  it("returns porcentage of the alive characters", () => {
    expect(app.getStatistics([{"name": "Rick Sanchez", "status": "Alive"}, 
      {"name": "Albert Einstein", "status": "Dead"}], "status", "Alive"
    )).toEqual(50);
  });
});

describe("removeDuplicates", () => {
  it("is a function", () => {
    expect(typeof app.removeDuplicates).toBe("function");
  });

  it("remove repeated values from array of objects", () => {
    expect(app.removeDuplicates([{name: "Rick Sanchez"}, {name: "Morty Smith"}, {name: "Beth Smith"}, {name: "Rick Sanchez"}, {name: "Morty Smith"}], "name"
    )).toEqual(["Beth Smith", "Morty Smith", "Rick Sanchez"]);
  });
});

describe("alphabeticalOrder", () => {
  it("is a function", () => {
    expect(typeof app.alphabeticalOrder).toBe("function");
  });

  it("returns characters in alphabetical order", () => {
    expect(app.alphabeticalOrder([{name: "Rick Sanchez"}, {name: "Morty Smith"}, 
      {name: "Albert Einstein"}, {name: "Beth Smith"}, {name: "Rick Sanchez"}]
    ))
      .toEqual([{name: "Albert Einstein"}, {name: "Beth Smith"}, {name: "Morty Smith"},
        {name: "Rick Sanchez"}, {name: "Rick Sanchez"}]);
  });
});

describe("searchName", () => {
  it("is a function", () => {
    expect(typeof app.searchName).toBe("function");
  });

  it("returns characters with typed name", () => {
    expect(app.searchName([{name: "Rick Sanchez"}, {name: "Morty Smith"}, 
      {name: "Albert Einstein"}, {name: "Alien Rick"}], "rick"
    ))
      .toEqual([{name: "Rick Sanchez"}, {name: "Alien Rick"}]);
  });
});