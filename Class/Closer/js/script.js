// let city = "Surat";

// const printCity = () => {
//     console.log(city);
// }

// printCity(); //Surat

// city = "Baroda";
// printCity(); //Baroda

// city = "Other";
// printCity(); //Other









// let name = 'Hello';  // Global Variable

// function outer(salary) {  // Outer function      //2
//     let age = 25; // Outer function's Variable

//     return function inner() {  // Inner function     //3
//         console.log(name);
//         console.log(age);
//         console.log(salary);
//     }
// }

// let res = outer(50000);  //Outer function call      //1   //4
// res();  //Inner function call      //5









// function outer() {  // Outer function      //2
//     let count = 0; // Outer function's Variable

//     return function inner() {  // Inner function     //3
//         count++;
//         console.log(count);
//     }
// }

// let res = outer();  //Outer function call      //1   //4
// res();  //Inner function call      //5
// res();
// res();
// res();

// console.log("-----------------------------");
// let res1 = outer();  //Outer function call      //1   //4
// res1();  //Inner function call      //5
// res1();








let outer = () => {
    let count = 0;

    return function inner() {
        count++;
        console.log(count);
    }

}

let res = outer();
res();
res();
res();
console.log("-----------------------------");
let res1 = outer();
res1();
res1();