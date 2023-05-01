// 01 - Max Number
let ary1  = [66, 8, 50, 92, 28, 50, 8, 66];
console.log("ary1 = ", ary1);

let max = (ary) => {
    let max = ary[0];

    for (let i=1; i<ary.length; i++) {
        if (ary[i] > max) {
            max = ary[i];
        }
    }
    console.log("01 - Max Number Is = ", max);
}
max(ary1);



// 02 - Min Number
let min = (ary) => {
    let min = ary[0];

    for (let i=1; i<ary.length; i++) {
        if (ary[i] < min) {
            min = ary[i];
        }
    }
    console.log("01 - Min Number Is = ", min);
}
min(ary1);



// 03 - ascending order
let ascending = (ary) => {

    ary.sort((a, b) => a - b);

    console.log("03 - Ascending Order Is = ", ary);
}
ascending(ary1);



// 04 - descending order
let descending = (ary) => {

    ary.sort((a, b) => b - a);

    console.log("04 - Descending Order Is = ", ary);
}
descending(ary1);



// 05 - Reversing
let reversing = (ary) => {

    ary.reverse();

    console.log("05 - Reversing Is = ", ary);
}
reversing(ary1);



// 06 - Sum
let sum = (ary) => {

    let sum = 0;

    ary.map((value) => sum += value);

    console.log("06 - Sum Is = ", sum);

}
sum(ary1);



// 07 - Average
let average = (ary) => {

    let sum = 0;

    ary.map((value) => sum += value);

    console.log("07 - Average Is = ", sum / ary.length);

}
average(ary1);



// 08 - Checking
let checking = (ary, value) => {

    let ans = ary.includes(value);

    console.log("08 - Checking Is = ", ans);

}
checking(ary1, 92);



// 09 - Removing Duplicates
let removingDuplicates = (ary) => {

    let newAry = [];

    ary.map((value) => {
        if (!newAry.includes(value)) {
            newAry.push(value);
        }
    });

    console.log("09 - Removing Duplicates Is = ", newAry);

}
removingDuplicates(ary1);



// 10 - Merging
let merging = (ary) => {

    let newAry = [14, 80, 26, 76, 49];

    ary.concat(newAry);

    console.log("10 - Merging Is = ", ary);

}
merging(ary1);



// 11 - Splitting
let Splitting = (ary) => {

    let ary1 = [], ary2 = [];

    ary.map((value) => {
        if (value > 50) {
            ary1.push(value);
        } else {
            ary2.push(value);
        }
    })

    console.log("11 - Splitting Is = ");
    console.log(ary1);
    console.log(ary2);

}
Splitting(ary1);



// 11_02 - Splitting2
let Splitting2 = (ary) => {

    let ary1 = [], ary2 = [];

    ary.map((value) => {
        if (typeof value === "number") {
            ary1.push(value);
        } else if  (typeof value === "string") {
            ary2.push(value);
        }
    })

    console.log("11_02 - Splitting2 Is = ");
    console.log(ary1);
    console.log(ary2);

}
let arr = [1,82, 77, 'Hello', 49, 'world', '!'];
Splitting2(arr);



// 13 - Rotating
let Rotating = (ary, ind) => {

    let a = ary.slice(0, ind);
    let b = ary.slice(ind);
    let ans = b.concat(a);
    console.log("13 - Rotating Is = ", ans);

}
let ary2 = [1, 82, 77, 49, 43];
Rotating(ary2, 3);



// 14 - second largest
let secondLargest = (ary, ind) => {

    let newAry = [];

    ary.map((value) => {
        if (!newAry.includes(value)) {
            newAry.push(value);
        }
    });

    newAry.sort((a, b) => b - a);
    let ans = newAry[ind - 1];
    console.log("14 - second largest Is = ", ans);

}
secondLargest(ary1, 2);



// 15 - k-th smallest
let smallest = (ary, ind) => {

    let newAry = [];

    ary.map((value) => {
        if (!newAry.includes(value)) {
            newAry.push(value);
        }
    });

    newAry.sort((a, b) => a - b);
    let ans = newAry[ind - 1];
    console.log("15 - k-th smallest Is = ", ans);

}
smallest(ary1, 3);



// 17 - median
let median = (ary) => {

    ary.sort((a, b) => a - b);
    console.log(ary);

    let a = ary.length;

    let b;
    let c;

    if (a % 2 === 0) {
        b = ary[a / 2];
        c = ary[(a / 2) - 1];
        console.log((b+c) / 2);
    } else {
        b = ary[a];
        console.log(b);
    }

}
let ary17 = [25,78,65,73,15,40, 75];
median(ary17);



// 19 - equal
let equal = (ary1, ary2) => {

    let ans;

    if (ary1.length !== ary2.length) {
        ans = 1;
    } else {
        for (let i = 0; i < ary1.length; i++) {
            if (ary1[i] !== ary2[i]) {
                ans = 1;
            } else {
                ans = 0;
            }
        }
    }
    console.log("19 - equal Is = ");
    if (ans === 1) {
        console.log("two arrays are not equal");
      } else {
        console.log("two arrays are equal");
      }

}
let ary19_01 = [1,8,3,7,9];
let ary19_02 = [1,8,3,70,9];
equal(ary19_01, ary19_02);