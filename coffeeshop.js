// const coffeeShop = {
//     branch: "San Luis Obispo",
//     drinks: {
//         tea: 2,
//         coffee: 3.5,
//         coldBrew: 4,
//         machaLatte: 5,
//         dripCoffee: 4.5
//     },
//     food: {
//         bagelWithCreamCheese: 6,
//         muffin: 3,
//         donut: 2.5,
//         breakfastBurrito: 5
//     },
    
    // drinksOrdered() {
        
    // }

// }

// console.log(coffeeShop.drinks)

// console.log(coffeeShop.drinks.entries());
// console.log(coffeeShop.drinks(`${key}: ${value}`));

//messing with Neils work below:

const coffeeShop = {
    branch: "Salford",
    food: [{croissant: 2.5}, {donut: 3}, {sandwich: 7}],
    drinks: [{latte: 2.5}, {tea: 2}, {water: 1.5}],
    drinksOrdered() {
        const order = [];
        for(let obj of this.drinks) {
            for(let key in obj) {
                order.push(`\t${key}: ${obj[key]}\n`);
            }
        }
        return `Your drinks order is:\n${order.reduce((obj, accumulator) => obj + accumulator)}`;
    },
    foodOrdered() {
        const order= [];

        for(let key in this.food) {
            order.push(`\t${key}: ${this.food[key]}\n`);
        }
        return `Your food order is: \n ${order.reduce((obj, accumulator) => obj + accumulator)}`;
    } 
};
console.log(coffeeShop.drinksOrdered());
console.log(coffeeShop.foodOrdered()); //tried adding the 2nd method to foodOrdered and it wont function correctly.
// just getting:
// Your food order is: 
//         0: [object Object]
//         1: [object Object]
//         2: [object Object]

//yet it works pergectly fine below??


// const coffeeShop = {
//     branch: "Salford",
//     food: {
//         croissant: 2.5,
//         donut: 3,
//         sandwich: 7
//     },
//     drinks: {
//         latte: 2.5,
//         tea: 2,
//         water: 1.5
//     },
//     drinksOrdered() {
//         const order = [];
//         for(let key in this.drinks) {
//             order.push(`\t${key}: ${this.drinks[key]}\n`);
//         }
//         return `Your drinks order is:\n${order.reduce((obj, accumulator) => obj + accumulator)}`;
//     },
    // foodOrdered() {
    //     return this.food;
    // }
// };
// console.log(coffeeShop.drinksOrdered());
// console.log(coffeeShop.foodOrdered());