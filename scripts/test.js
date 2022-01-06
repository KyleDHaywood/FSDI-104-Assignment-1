let student1 = {
  name: "Miles",
  age: 99,
  grade: "A",
  music: ["Coldplay", "Oasis", "Keane"],
  address: {
    street: "Av. Palm",
    number: 262,
    zip: 37894,
    city: "San Bernadino",
    state: "CA",
  },
};

console.log(student1.address["zip"]);

let student2 = {
  name: "Jasmine",
  age: 88,
  grade: "A",
};
console.log(student2);

let starbucks = [
  {
    name: "John",
    type: "Gold",
    stars: 100,
    rewards: [],
  },
  {
    name: "Robert",
    type: "Green",
    stars: 20,
    rewards: ["Frappacino"],
  },
  {
    name: "Lucia",
    type: "Gold",
    stars: 40,
    rewards: [],
  },
];
console.log(starbucks);
