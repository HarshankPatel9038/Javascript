let ary = [1, 52, 82, 252, 425, 526];

console.log(ary);
console.log(ary.length);

console.log("-------------------");

for (let i = 0; i<ary.length; i++) {
    console.log(ary[i]);
}

console.log("-------------------");

ary.forEach(function(value, index) {
    console.log(index, value);
});

console.log("-------------------");

ary.forEach((value, index) => {
    console.log(index, value);
});

console.log("-------------------");

ary.map((value, index) => {
    console.log(index, value);
});

console.log("-------------------");

ary.map((value, index) => console.log(index, value));

console.log("-------------------");
 
// UPDATE
ary[3] = 50;
console.log("UPDATE")
console.log(ary);

console.log("-------------------");

// ADD FORM LAST
ary.push(99);
console.log("ADD FORM LAST")
console.log(ary);

console.log("-------------------");

// REMOVE FORM LAST
ary.pop();
console.log("REMOVE FORM LAST");
console.log(ary);

// ADD FORM FIRST
ary.unshift(99);
console.log("ADD FORM FIRST");
console.log(ary);

console.log("-------------------");

// REMOVE FORM FIRST
ary.shift();
console.log("REMOVE FORM FIRST");
console.log(ary);

console.log("-------------------");

// ISARRAY
console.log("ISARRAY");
console.log(Array.isArray(ary));

console.log("-------------------");

// CONCAT
let ary2 = [10, "Hello", "world", 50];
let ans1 = ary.concat(ary2);
console.log("CONCAT");
console.log(ans1);

console.log("-------------------");

// SOME
let ans2 = ary.some((value) => value > 10);
console.log("SOME");
console.log(ans2);

console.log("-------------------");

// TOSTRING
console.log("TOSTRING");
console.log(ary.toString());

console.log("-------------------");

// FIND
let ans3 = ary.find((value) => value > 10);
console.log("FIND");
console.log(ans3);

console.log("-------------------");

// SPLICE
console.log("SPLICE");
console.log(ary);
ary.splice(2, 0, "other1", "other2", "other3", "other4");
console.log("add", ary);
let ans5 = ary.splice(2, 3);
console.log("remove", ans5);
console.log(ary);