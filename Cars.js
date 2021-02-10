class Car{
    constructor(carReg, hours){
        this._carReg = carReg;
        this._hours = hours;
        this._rate = 1.5;

        // this._timeIn = timeIn;
        // this._timeOut = timeOut;
    }
    // payment = (this._hours * this._rate);
    payment(){
        return (this._hours * this._rate);
    }
    bill(){
        return `Car ${this._carReg} owes ${this.payment()}`;
    }
};

class Staff extends Car {
    constructor(carReg, hours, id, credits){
    super(carReg, hours);
    this._id = id;
    this._credits = credits;
}
staffpay() {
    return this.payment() - this._credits
}
staffbill() {
    return `Staff member ${this._id} owes ${this.staffpay()}.`
}
}

// const car1 = new Car("ABC", 1200, 1400);
const car1 = new Car("ABC", 5);
// console.log(car1.bill());
// console.log(car1.payment());
// console.log(car1.bill());
const staff1 = new Staff("ZXC", 6, "1234", 7);
console.log(staff1.staffbill());

//my own work is above - this worked first time !! fuck yes !! 
//below I believe is what Neil went through as an answer. 


// class Car {
//     constructor(reg, rate) {
//         this.reg = reg;
//         this.hoursParked = 0;
//         this.rate = rate;
//     }

//     get total () {
//         return this.hoursParked * this.rate;
//     }

//     pay() {
//         return `${this.reg} owes $ ${this.total}`;
//     }
// }

// class StaffCar extends Car {
//     constructor(reg, rate, staffNumber, credits) {
//         super(reg, rate);
//         this.staffNumber = staffNumber;
//         this.credits = credits;
//     }
//     get total() {
//         return this.hoursParked * this.rate - this.credits;
//     }
//     pay() {
//         return `Staff Member ${this.staffNumber} was discoutned ${this.credits} for ${this.reg} owing ${this.total}`; 
//     }
// }

// const staffCar1 = new StaffCar("asdf", 1.5, 1234, 5);
// staffCar1.hoursParked = 5;
// staffCar1.credits = 5;
// console.log(staffCar1.pay);