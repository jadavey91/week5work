class Pet{
    constructor(type){
        this.type = type;
        this.hunger = 5;
        this.thirst = 5;
        this.fun = 5;
    }
    play() {
        this.fun++, this.hunger--, this.thirst--;
        console.log(`That was fun! Here's how I'm doing - \n hunger:${this.hunger} \n thirst:${this.thirst} \n fun:${this.fun}`);
        return this.petUpdate();
    }
    feed() {
        this.fun--, this.hunger++, this.thirst--;
        console.log(`That was tasty! Here's how I'm doing - \n hunger:${this.hunger} \n thirst:${this.thirst} \n fun:${this.fun}`);
        return this.petUpdate();
    }
    drink() {
        this.fun--, this.hunger--, this.thirst++;
        console.log(`That was tasty! Here's how I'm doing - \n hunger:${this.hunger} \n thirst:${this.thirst} \n fun:${this.fun}`);
        return this.petUpdate();
    }
    petUpdate() {
        if (this.fun <= 2) {
            console.log(`You need to play with me, I'm only having ${this.fun} with you!`)
        } if (this.thirst <=2) {
            console.log(`You need to hydrate me, I'm ${this.thirst} and thirsty!`)
        } if (this.hunger <= 2) {
            console.log(`You need to feed me, I am ${this.hunger} and starving!`)
        } if (this.hunger > 2 && this.thirst > 2 && this.fun > 2) { // had to add this as the else statement runs even when an above if is met?
            console.log(`I'm happy to do something. Would you like to play, feed or hydrate me?`);
        } else { //not sure how to have an else to end these if statements?
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


const bill = new Pet("Dog");
// console.log(Bill);
// console.log(Bill.type);
// bill.play();
// bill.play();
// bill.play();

const jack = new Pet("Cat");

jack.feed();
jack.feed();
jack.feed();