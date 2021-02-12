class Pet {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.hunger = 5;
    this.thirst = 5;
    this.fun = 5;
  }
  play() {
    this.fun++, this.hunger--, this.thirst--;
    h2.textContent = `That was fun! Here's how I'm doing - \n hunger:${this.hunger} \n thirst:${this.thirst} \n fun:${this.fun}`;
    return this.petUpdate();
  }
  feed() {
    this.fun--, (this.hunger += 2);
    h2.textContent = `That was tasty! Here's how I'm doing - \n hunger:${this.hunger} \n thirst:${this.thirst} \n fun:${this.fun}`;
    return this.petUpdate();
  }
  drink() {
    this.fun--, (this.thirst += 2);
    h2.textContent = `That was tasty! Here's how I'm doing - \n hunger:${this.hunger} \n thirst:${this.thirst} \n fun:${this.fun}`;
    return this.petUpdate();
  }
  petUpdate() {
    if (this.fun <= 2) {
      h3.textContent = `You need to play with me, I'm only having ${this.fun} much fun with you!`;
    }
    if (this.thirst <= 2) {
      h3.textContent = `You need to hydrate me, I'm ${this.thirst} and thirsty!`;
    }
    if (this.hunger <= 2) {
      h3.textContent = `You need to feed me, I am ${this.hunger} and starving!`;
      // } if (this.hunger > 2 && this.thirst > 2 && this.fun > 2) { // had to add this as the else statement runs even when an above if is met?
      //     console.log(`I'm happy to do something. Would you like to play, feed or hydrate me?`);
    }
    if (this.hunger == 0 && this.thirst == 0) {
      h3.textContent = `You have really neglected me and I died of hunger and thirst simultaneously`;
      h1.textContent = `You killed ${pet1.name}, refresh the page to try again.`;
      if (interactions.style.display === "none") {
        interactions.style.display = "block";
      } else {
        interactions.style.display = "none";
      }
    }
    if (this.fun == 0) {
      h3.textContent = `I've had so little fun that I've died of boredom`;
      h1.textContent = `You killed ${pet1.name}, refresh the page to try again.`;
      if (interactions.style.display === "none") {
        interactions.style.display = "block";
      } else {
        interactions.style.display = "none";
      }
    }
    if (this.thirst == 0 && this.hunger > 0) {
      h3.textContent = `I'm so dehydrated that I've actually died!`;
      h1.textContent = `You killed ${pet1.name}, refresh the page to try again.`;
      if (interactions.style.display === "none") {
        interactions.style.display = "block";
      } else {
        interactions.style.display = "none";
      }
    }
    if (this.hunger == 0 && this.thirst > 0) {
      h3.textContent = `Well you've only gone and starved me to death haven't you!`;
      h1.textContent = `You killed ${pet1.name}, refresh the page to try again.`;
      if (interactions.style.display === "none") {
        interactions.style.display = "block";
      } else {
        interactions.style.display = "none";
      }
    }
  }
}

// const petUpdate = (animal) => {
//     console.log(animal);
//     if (animal.fun <= 2) {
//         console.log(`You need to play with me, I'm only having ${animal.fun} with you!`)
//     } else if (animal.thirst <=2) {
//         console.log(`You need to hydrate me, I'm ${animal.thirst} and thirsty!`)
//     } else if(animal.hunger <= 2) {
//         console.log(`You need to feed me, I am ${animal.hunger} and starving!`)
//     } else {
//         console.log(`I'm happy to do something. Would you like to play, feed or hydrate me?`);
//     }
// }

// const bill = new Pet("Bill", "Dog");
// // console.log(Bill);
// console.log(bill.name);
// // bill.play();
// // bill.play();
// // bill.play();

// const jack = new Pet("Jack", "Cat");

// jack.feed();
// jack.feed();
// jack.feed();
