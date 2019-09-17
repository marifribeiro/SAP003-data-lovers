require("../src/data.js");

const assert = require("assert");

describe("toInternal", () => {

  it("is a function", () => {
    assert.equal(typeof toInternal, "function");
  });

  it("should return ...", () => {
    assert.equal(window.toInternal({
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "Earth (C-137)",
      },
      "location": {
        "name": "Earth (Replacement Dimension)",
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    }), {image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg", location: "Earth (Replacement Dimension)", name: "Rick Sanchez", origin: "Earth (C-137)", status: "Alive"});
  });

});

describe("getData", () => {
  it("is a function", () => {
    assert.equal(typeof getData, "function");
  });
});