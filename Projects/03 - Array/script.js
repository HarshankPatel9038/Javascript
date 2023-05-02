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

// 11 - Splitting an array into two arrays based on a condition.
let Splitting = (ary) => {

  let ary1 = [], ary2 = [];

  ary.map((value) => {
    if (value > 50) {
      ary1.push(value);
    } else {
      ary2.push(value);
    }
  })

  console.log("11 - Splitting an array into two arrays based on a condition.");
  console.log(ary1);
  console.log(ary2);

}
Splitting(ary1);

console.log("--------------------------------------------------------");

// 11_02 - Splitting an array into number and string arrays based on a condition.
let Splitting2 = (ary) => {

  let ary1 = [], ary2 = [];

  ary.map((value) => {
    if (typeof value === "number") {
      ary1.push(value);
    } else if (typeof value === "string") {
      ary2.push(value);
    }
  })

  console.log("11_02 - Splitting an array into number and string arrays based on a condition.");
  console.log(ary1);
  console.log(ary2);

}
let arr = [1, 82, 77, 'Hello', 49, 'world', '!'];
Splitting2(arr);

console.log("--------------------------------------------------------");

// 13 -  Rotating an array by a given number of positions.
let Rotating = (ary, ind) => {

  let a = ary.slice(0, ind);
  let b = ary.slice(ind);
  let ans = b.concat(a);
  console.log("13 -  Rotating an array by a given number of positions.");
  console.log(ans);

}
let ary13 = [1, 82, 77, 49, 43];
Rotating(ary13, 3);

console.log("--------------------------------------------------------");

// 14 - Finding the second largest element in an array.
let secondLargest = (ary, ind) => {

  let newAry = [];

  ary.map((value) => {
    if (!newAry.includes(value)) {
      newAry.push(value);
    }
  });

  newAry.sort((a, b) => b - a);
  let ans = newAry[ind - 1];
  console.log("14 - Finding the second largest element in an array.");
  console.log(ans);

}
secondLargest(ary1, 2);

console.log("--------------------------------------------------------");

// 15 - Finding the k-th smallest element in an array.
let smallest = (ary, ind) => {

  let newAry = [];

  ary.map((value) => {
    if (!newAry.includes(value)) {
      newAry.push(value);
    }
  });

  newAry.sort((a, b) => a - b);
  let ans = newAry[ind - 1];
  console.log("15 - Finding the k-th smallest element in an array.");
  console.log(ans);

}
smallest(ary1, 3);

console.log("--------------------------------------------------------");

// 17 - Finding the median of an array.
let median = (ary) => {

  ary.sort((a, b) => a - b);

  let ans;
  let ind = Math.floor(ary.length / 2);

  console.log("17 - Finding the median of an array.");
  if (ary.length % 2 === 0) {
    ans = (ary[ind - 1] + ary[ind]) / 2;
  } else {
    ans = ary[ind];
  }

  console.log(ans);

}
let ary17 = [25, 78, 65, 73, 15, 40, 75, 91];
median(ary17);

console.log("--------------------------------------------------------");

// 19 - Checking if two arrays are equal or not.
let ary19_01 = [1, 8, 3, 7, 9];
let ary19_02 = [1, 8, 3, 7, 9];
let equal = (ary1, ary2) => {

  let ans = 0;

  if (ary1.length !== ary2.length) {
    ans = 1;
  } else {
    for (let i = 0; i < ary1.length; i++) {
      if (ary1[i] !== ary2[i]) {
        ans = 1;
      }
    }
  }
  console.log("19 - Checking if two arrays are equal or not.");
  if (ans === 1) {
    console.log("two arrays are not equal");
  } else {
    console.log("two arrays are equal");
  }

}
equal(ary19_01, ary19_02);