console.log("--------------------------------------------------------");

// =============== 01 - Finding the maximum element in an array. ===============
let ary1 = [10, 50, 80, 20, 70];
console.log("01 - Finding the maximum element in an array.");
console.log(Math.max(...ary1));

console.log("--------------------------------------------------------");

// =============== 02 - Finding the minimum element in an array. ===============
let ary2 = [10, 50, 80, 20, 70];
console.log("02 - Finding the minimum element in an array.");
console.log(Math.min(...ary2));

console.log("--------------------------------------------------------");

// =============== 03 - Sorting an array in ascending order. ===============
let ary3 = [10, 50, 80, 20, 70];
ary3.sort((a, b) => a - b);
console.log("03 - Sorting an array in ascending order.");
console.log(ary3);

console.log("--------------------------------------------------------");

// =============== 04 - Sorting an array in descending order. ===============
let ary4 = [10, 50, 80, 20, 70];
ary4.sort((a, b) => b - a);
console.log("04 - Sorting an array in descending order.");
console.log(ary4);

console.log("--------------------------------------------------------");

// =============== 05 - Reversing an array. ===============
let ary5 = [10, 20, 30, 40, 50];
ary5.reverse();
console.log("05 - Reversing an array.");
console.log(ary5);

console.log("--------------------------------------------------------");

// =============== 06 - Finding the sum of all elements in an array. ===============
let ary6 = [10, 20, 30, 40, 50];
let ary6sum = 0;
ary6.map((value) => (ary6sum += value));
console.log("06 - Finding the sum of all elements in an array.");
console.log(ary6sum);

console.log("--------------------------------------------------------");

// =============== 07 - Finding the average of all elements in an array. ===============
let ary7 = [10, 20, 30, 40, 50];
let ary7sum = 0;
ary7.map((value) => (ary7sum += value));
console.log("07 - Finding the average of all elements in an array.");
console.log(ary7sum / ary7.length);

console.log("--------------------------------------------------------");

// =============== 08 - Checking if an array contains a specific element. ===============
let ary8 = [10, 20, 30, 40, 50];
console.log("08 - Checking if an array contains a specific element.");
console.log(ary8.includes(20));

console.log("--------------------------------------------------------");

// =============== 09 - Removing duplicates from an array. ===============
let ary9 = [10, 20, 30, 40, 50];
let newAry = [];
ary9.map((value) => {
  if (!newAry.includes(value)) {
    newAry.push(value);
  }
});
console.log("09 - Removing duplicates from an array.");
console.log(newAry);

console.log("--------------------------------------------------------");

// =============== 10 - Merging two arrays into a new array. ===============
let ary10_1 = [10, 20, 30, 40, 50];
let ary10_2 = ["hello", "world", "!"];
let ary10_3 = [...ary10_1, ...ary10_2];
console.log("10 - Merging two arrays into a new array.");
console.log(ary10_3);

console.log("--------------------------------------------------------");

// =============== 13 - Rotating an array by a given number of positions. ===============
function ary13ans(ary13, num) {
  for (var i = 0; i < num; i++) {
    ary13.unshift(ary13.pop());
  }
  console.log("13 - Rotating an array by a given number of positions.");
  console.log(ary13);
}
var ary13 = [1, 2, 3, 4, 5];
ary13ans(ary13, 2);

console.log("--------------------------------------------------------");

// =============== 14 -  Finding the second largest element in an array. ===============
let ary14 = [15, 88, 26, 47, 93];
ary14.sort((a,b) => a - b);
let ary14ans = ary14.length - 2;
// let largest14 = [];
// let secondLargest14 = [];
// for (let i = 1; i < ary14.length; i++) {
//   if (ary14[i] > largest14) {
//     secondLargest14 = largest14;
//     largest14 = ary14[i];
//   } else if (ary14[i] > secondLargest14 && ary14[i] < largest14) {
//     secondLargest14 = ary14[i];
//   }
// }
console.log("14 -  Finding the second largest element in an array.");
// console.log(secondLargest14);
console.log(ary14[ary14ans]);

console.log("--------------------------------------------------------");

// =============== 15 - Finding the k-th smallest element in an array. ===============
let ary15 = [15, 88, 26, 47, 93];
ary15.sort((a,b) => a - b);
let ary15ans = ary15.length - 3;
console.log("15 - Finding the k-th smallest element in an array.");
console.log(ary15[ary15ans]);

console.log("--------------------------------------------------------");

// =============== 19 - Checking if two arrays are equal or not. ===============
let ary19_1 = [15, 88, 26, 47, 93];
let ary19_2 = [15, 88, 26, 25, 93];
let ary19ans;
if (ary19_1.length !== ary19_2.length) {
  ary19ans = 1;
}
for (let i = 0; i < ary19_1.length; i++) {
  if (ary19_1[i] !== ary19_2[i]) {
    ary19ans = 1;
  }
}
console.log("19 - Checking if two arrays are equal or not.");
if (ary19ans === 1) {
  console.log("two arrays are not equal");
} else {
  console.log("two arrays are equal");
}

console.log("--------------------------------------------------------");

// =============== 20 - Finding the union of two arrays. ===============
const ary20_1 = [1, 2, 3, 4];
const ary20_2 = [3, 4, 5, 6];
const ary20ans = [...new Set([...ary20_1, ...ary20_2])];
console.log("20 - Finding the union of two arrays.");
console.log(ary20ans);