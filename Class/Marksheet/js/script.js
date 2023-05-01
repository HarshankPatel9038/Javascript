let name1 = document.getElementById("name1");
let name2 = document.getElementById("name2");
let name3 = document.getElementById("name3");
let mathsMark1 = document.getElementById("maths-mark1");
let mathsMark2 = document.getElementById("maths-mark2");
let mathsMark3 = document.getElementById("maths-mark3");
let biologyMarks1 = document.getElementById("biology-marks1");
let biologyMarks2 = document.getElementById("biology-marks2");
let biologyMarks3 = document.getElementById("biology-marks3");
let physicsMarks1 = document.getElementById("physics-marks1");
let physicsMarks2 = document.getElementById("physics-marks2");
let physicsMarks3 = document.getElementById("physics-marks3");
let totalMarks1 = document.getElementById("total-marks1");
let totalMarks2 = document.getElementById("total-marks2");
let totalMarks3 = document.getElementById("total-marks3");





let a = prompt("Enter a First student Name");
name1.innerHTML = a;

let b = parseInt(prompt("Enter a maths marks for student 1"));
mathsMark1.innerHTML = b;

let c = parseInt(prompt("Enter a biology marks for student 1"));
biologyMarks1.innerHTML = c;

let d = parseInt(prompt("Enter a physics marks for student 1"));
physicsMarks1.innerHTML = d;

let e = b + c + d;
totalMarks1.innerHTML = e;





let f = prompt("Enter a second student Name");
name2.innerHTML = f;

let g = parseInt(prompt("Enter a maths marks for student 2"));
mathsMark2.innerHTML = g;

let h = parseInt(prompt("Enter a biology marks for student 2"));
biologyMarks2.innerHTML = h;

let i = parseInt(prompt("Enter a physics marks for student 2"));
physicsMarks2.innerHTML = i;

let j = g + h + i;
totalMarks2.innerHTML = j;





let k = prompt("Enter a third student Name");
name3.innerHTML = k;

let l = parseInt(prompt("Enter a maths marks for student 3"));
mathsMark3.innerHTML = l;

let m = parseInt(prompt("Enter a biology marks for student 3"));
biologyMarks3.innerHTML = m;

let n = parseInt(prompt("Enter a physics marks for student 3"));
physicsMarks3.innerHTML = n;

let o = l + m + n;
totalMarks3.innerHTML = o;