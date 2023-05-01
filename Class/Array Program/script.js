// 01 - Max Number
let ary1  = [66, 8, 50, 92, 28, 50, 8, 66];

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