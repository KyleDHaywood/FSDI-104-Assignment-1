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
    /*
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
    */
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

function checkId(variable, id) {
  if (variable.length < 1) {
    document.getElementById(id).classList.add("error");
    return false;
  } else {
    document.getElementById(id).classList.remove("error");
    return true;
  }
}

function showPetCards() {
  document.getElementById("petList").innerHTML = ``;
  for (let i = 0; i < saloon.pets.length; i++) {
    document.getElementById("petList").innerHTML += createCard(saloon.pets[i]);
  }
}

function createCard(pet) {
  return `<div class="card my-card">
  <h2>${pet.name}</h2>
  <label>Age: ${pet.age}</label>
  <label>Gender: ${pet.gender}</label>
  <label>Breed: ${pet.breed}</label>
  <label>Owner: ${pet.owner}</label>
  <label>Phone: ${pet.contact}</label>
  <label>${pet.shampoo}</label>
  <label>${pet.grooming}</label>
  <label>${pet.meal}</label>
  <label>${pet.play}</label>
  <button class="btn btn-danger btn-sm" onclick="removePet(${pet.id})">Delete</button>
</div>`;
}

function getInfo() {
  let isValid = true;
  let petName = document.getElementById("txtPetName").value;
  isValid = checkId(petName, "txtPetName");
  let age = document.getElementById("numAge").value;
  isValid = checkId(age, "numAge");

  let gender = document.getElementById("dlGender").value;
  isValid = checkId(gender, "dlGender");

  let breed = document.getElementById("txtBreed").value;
  isValid = checkId(breed, "txtBreed");

  let shampoo = document.getElementById("ckShampoo").checked;
  isValid = checkId(shampoo, "ckShampoo");

  let grooming = document.getElementById("ckGrooming").checked;
  isValid = checkId(grooming, "ckGrooming");

  let meal = document.getElementById("ckMeal").checked;
  isValid = checkId(meal, "ckMeal");

  let play = document.getElementById("ckPlay").checked;
  isValid = checkId(play, "ckPlay");

  let owner = document.getElementById("txtOwner").value;
  isValid = checkId(owner, "txtOwner");

  let contact = document.getElementById("txtContactNumber").value;
  isValid = checkId(contact, "txtContactNumber");

  if (shampoo || grooming || meal || play) {
    document.getElementById("ckShampoo").classList.remove("error");
    document.getElementById("ckGrooming").classList.remove("error");
    document.getElementById("ckMeal").classList.remove("error");
    document.getElementById("ckPlay").classList.remove("error");
  } else {
    document.getElementById("ckShampoo").classList.add("error");
    document.getElementById("ckGrooming").classList.add("error");
    document.getElementById("ckMeal").classList.add("error");
    document.getElementById("ckPlay").classList.add("error");
    isValid = false;
  }
  if (isValid == true) {
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
    showPetCards();
  }
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

function removePet(index) {
  //search the pet we want to remove
  saloon.pets.forEach(function callback(pet, value) {
    if (index === pet.id) {
      console.log("I found it in the position", value);
      saloon.pets.splice(value, 1);
    }
  });
  //remove the pet from the array
  //remove the pet from the html
  console.log("Removing Pet", index);
  document.getElementById(index).remove();
}

function searchPet() {
  //get the value from the inout search and store it in a variable
  let searchString = document.getElementById("searchInput").value;

  saloon.pets.forEach(function callback(pet, value) {
    if (searchString.toLowerCase() === pet.name.toLowerCase()) {
      document.getElementById(pet.id).classList.add("highlight");
    }
  });
}
function init() {
  displayInfo();
  showPetCards();
}

window.onload = init;

displayPetNames();
