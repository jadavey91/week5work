const nameInput = document.querySelector("#name");
const typeInput = document.querySelector("#type");
const submission = document.querySelector("#submit");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");
const petImage = document.querySelector("#pet");
const petPlay = document.querySelector("#play");
const petFeed = document.querySelector("#feed");
const petDrink = document.querySelector("#drink");
const interactions = document.querySelector("#interact");


let pet1;

submission.addEventListener("click", () => {
  console.log(nameInput.value);
  pet1 = new Pet(nameInput.value, typeInput.value);
  h1.textContent = `What would you like to do with ${pet1.name}?`;
  if (typeInput.value == "Dog") {
    petImage.src = "dog.jpg";
  }
  if (typeInput.value == "Cat") {
    petImage.src = "cat.jpg";
  }
  if (typeInput.value == "Rabbit") {
    petImage.src = "rabbit.jpg";
  }
});

petPlay.addEventListener("click", () => {
  h3.textContent = "";
  pet1.play();
});

petFeed.addEventListener("click", () => {
  h3.textContent = "";
  pet1.feed();
});

petDrink.addEventListener("click", () => {
  h3.textContent = "";
  pet1.drink();
});
