let x = 5, y = 2, z = x + y;
console.log("z = ", z);

x++;
console.log("x = ", x);

y--;
console.log("y = ", y);

let a = x **= y;
console.log("a = ", a);

let b = x /= y;
console.log("b = ", b);

let c = x %= y;
console.log("c = ", c);

let d = x;
console.log("d = ", d);


// COMPARISON OPERATOR
let e = 5, f = "5";
console.log(e == f);  //true
console.log(e === f);  //false
console.log(e != f);  //false
console.log(e !== f);  //true

let g = 10, h = 15;
console.log(g > h);  //false
console.log(g < h);  //true
console.log(g >= h);  //false
console.log(g <= h);  //false

5 <= 10 ? console.log("true") : console.log("false");


// LOGICAL OPERATOR
let i = 5, j = 10, n;
console.log(i > j && g < 15);  //false

console.log(i > j || g < 15);  //true

n = !(i > j)
console.log(n);  //true


// TYPE OPERATOR
let k, l = true, m = null;
console.log(typeof e);  //number
console.log(typeof f);  //string
console.log(typeof k);  //undefined
console.log(typeof l);  //boolean
console.log(typeof m);  //object