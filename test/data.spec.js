require("../src/data.js");

describe("toInternal", () => {

  it("is a function", () => {
    expect(typeof app.toInternal).toBe("function");
  });

  it("return a smaller object", () => {
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

  it("return a object", () => {
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

  it("return a array of objects", () => {
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

  it("return only characters with status alive", () => {
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

  it("return porcentage of the characters are alive", () => {
    expect(app.getStatistics([{"name": "Rick Sanchez", "status": "Alive"}, 
      {"name": "Albert Einstein", "status": "Dead"}], "status", "Alive"
    ))
      .toEqual(50);
  });
});