let saloon = {
  name: "The Fashion Pet",
  address: {
    street: "Av. Palm",
    number: "123",
    zip: 93944,
    city: "San Diego",
    state: "California",
  },
  hours: {
    open: "9:00am",
    close: "5:00pm",
  },
  pets: [
    {
      name: "Scooby",
      age: 50,
      gender: "M",
      breed: "Great Dane",
      service: "Grooming",
      ownerName: "Shaggy",
      contactNumber: "615-555-5555",
    },
    {
      name: "Toto",
      age: 90,
      gender: "M",
      breed: "Terrier",
      service: "Haircut",
      ownerName: "Dorothy",
      contactNumber: "972-845-0001",
    },
    {
      name: "Lassy",
      age: 50,
      gender: "F",
      breed: "Collie",
      service: "Shampoo",
      ownerName: "Jeff",
      contactNumber: "579-852-7469",
    },
  ],
};
function Service(shampoo, grooming, meal, play) {
  this.shampoo = shampoo;
  this.grooming = grooming;
  this.meal = meal;
  this.play = play;
}
function PetGenerator(
  petName,
  age,
  gender,
  breed,
  owner,
  contact,
  shampoo,
  grooming,
  meal,
  play
) {
  this.name = petName;
  this.age = age;
  this.gender = gender;
  this.breed = breed;
  this.owner = owner;
  this.contact = contact;
  this.service = new Service(shampoo, grooming, meal, play);
}

function getInfo() {
  let petName = document.getElementById("txtPetName").value;
  let age = document.getElementById("numAge").value;
  let gender = document.getElementById("dlGender").value;
  let breed = document.getElementById("txtBreed").value;
  let shampoo = document.getElementById("ckShampoo").checked;
  let grooming = document.getElementById("ckGrooming").checked;
  let meal = document.getElementById("ckMeal").checked;
  let play = document.getElementById("ckPlay").checked;
  let owner = document.getElementById("txtOwner").value;
  let contact = document.getElementById("txtContactNumber").value;
  let pet = new PetGenerator(
    petName,
    age,
    gender,
    breed,
    owner,
    contact,
    shampoo,
    grooming,
    meal,
    play
  );
  saloon.pets.push(pet);

  for (let i = 0; i < saloon.pets.length; i++) {
    console.log(saloon.pets[i]);
  }
  document.getElementById("petInfo").reset();
}

function displayInfo() {}
function displayPetNames() {
  for (let i = 0; i < saloon.pets.length; i++) {
    console.log(saloon.pets[i].name);
  }
}

/*
function displayAddress() {
  document.getElementById("footer-info").innerHTML = `<p>${saloon.name} <br>
    ${saloon.address.number} ${saloon.address.street}, ${saloon.address.city}, ${saloon.address.state} <br>
${saloon.address.zip}`;
}
*/

function displayNumberOfPets() {
  alert(
    `There are currently ${saloon.pets.length} fur babies registered for pampering at ${saloon.name}`
  );
}

displayAddress();
displayPetNames();
