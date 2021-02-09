// let offer = "none";
// let time = 1200;

// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//         "Cappuccino",
//         "Latte",
//         "Filter Coffe",
//         "Tea",
//         "Hot Chocolate"
//     ],
//     breakfastOffer: "Free croissant with Coffee",
//     lunchOffer: "Free drink with surprisingly priced sandwich",
//     noOffer: "Sorrt no offer",
//     openCafe(){
//         if(this.hasSpecialOffers){
//         return "Come on in";
//         }
//     },
//     //  (){  replaces : () => {
//     closeCafe(){
//         return "We are closed, come back tomorrow!"
//     }
// };

// console.log(cafe.openCafe());
// console.log(cafe.closeCafe());


// if (time < 1100) {
//     offer = cafe.breakfastOffer;
//     console.log(cafe.breakfastOffer);
// }
// else if (time < 1500){
//     offer = cafe.lunchOffer;
//     console.log(offer);
// }


// const person = {
//     name: "Jim",
//     age: 406,

//     sayHi() { 
//         return `Hello, my name is ${this.name}`;
//     }
// };

// person.song = ["Interpol-PDA", "Radiohead-Just"]

// console.log(person.song);
// console.log(person.sayHi());

//PM Slides below

// let rosie = {
//     _name: "Rosie",
//     _hops: 0,

//     get name() {
//         return this._name;
//     },

//     get hops() {
//         return this._hops;
//     },

//     increaseHops() {
//         this._hops++;
//     }
// }

// class Bunny{
//     constructor(name){
//         this._name = name;
//         this._hops = 0;
//     }

//     get name() {
//         return this._name;
//     }

//     get hops() {
//         return this._hops;
//     }

//     increaseHops() {
//         this._hops++;
//     }
// }

// const Fred = new Bunny("Fred");
// Fred.increaseHops();
// console.log(Fred.hops);


// coffee shop activity (last in slides am)

// const coffeeShop = {
//     branch: "Sandbach",
//     drinks: [{latte: 2.5}, {tea: 2}, {watter: 1.5} ],
//     food: [{croissant: 2.5}, {donut: 4}, {sandwich: 7} ],

//     drinksOrdered() {
//         for(let key in this.drinks){
//             this.foodOrdered.push('${key}: ${this.drinks[key]}');
//             console.log(this.drinks[key]);
//         }
//         return this.drinks;
//     },
//     foodOrdered(){
//         return this.food;
//     }
// }

// console.log(coffeeShop.foodOrdered());

// class Animal{
//     constructor(name){
//         this._name = name;
//         this._hunger = 100;
//         this._thirst = 100;
//     }
//     get name(){
//         return this._name;
//     }
//     get hunger (){
//         return this._hunger;
//     }
//     get thirst (){
//         return this._thirst;
//     }
//     eat(){
//         this._hunger--;
//     }
//     drink(){
//         this._thirst--;
//     }

// }

// class Bunny extends Animal {
//     constructor(name, lovesCarrot){
//         super(name);
//         this._lovesCarrot = lovesCarrot;
//     }
//     get lovesCarrot(){
//         return this._lovesCarrot;
//     }
// }

// const rosie = new Bunny("Rosie", true);
// console.log(rosie);

// const pet = {
//     name: "Buggie",
//     typeOfPet: "Rabbit",
//     age: 6,
//     colour: "white",

//     eat() {
//         return `${pet.name} is eating.`;
//     },
//     drink() {
//         return `${pet.name} is drinking.`;
//     }
// }
// console.log(pet.eat());
// console.log(pet.drink());

