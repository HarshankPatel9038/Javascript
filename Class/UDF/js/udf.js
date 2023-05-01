// FUNCTION DECLARATION
function greeting() {
    console.log("Hello World..!");
}

// FUNCTION CALL
greeting();



function calculateAge(year) {
    let currentYear = new Date().getFullYear();
    let calculate = currentYear - year;
    return calculate;
}

let a = calculateAge(1995);
console.log("Your Age Is", a);

let b = calculateAge(2000);
console.log("Your Age Is", b);



// ARROW FUNCTION
const hello = () => {
    console.log("Arrow Function");
}

hello();




// PACKAGE FUNCTION
const costing = (dest) => {
    if (dest === "goa") {
        return 35000;
    } else if (dest === "bali") {
        return 50000;
    } else if (dest === "manali") {
        return 40000;
    }
}

const package = (dest1, dest2) => {
    let c1 = costing(dest1);
    let c2 = costing(dest2);

    let msg = dest1 + " package Price " + c1 + " & " + dest2 + " package Price " + c2;

    return msg;

}

let x = package("goa", "bali");
console.log(x);
