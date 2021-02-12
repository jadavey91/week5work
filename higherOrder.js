
// const helloAgain = (fn) => {
//         for (let count=0; count < 5; count++){
//         fn();
//         // console.log(fn);
//         // }
// }
// }

// const hello = () => {
//     console.log("Hello Code Nation");
// } 

// helloAgain( () => {
//     console.log("hello");
// });

const doTimes = (num, fn) => {
    fn(num)
    if (num == 0){
        return;
    } else {
        return doTimes(num-1, fn)
    }
}

const calling = (number) => {
    console.log(number);
}

doTimes(5, calling);