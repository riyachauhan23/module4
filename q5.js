const input=require("readline-sync")
// let arr = ['1', '0', '0', '1', '1', '0', '1', '1', '1', '0'];
// let count1 = 0;
// let count0 = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === '1') {
//         count1++;
//     } else if (arr[i] === '0') {
//         count0++;
//     }
// }

// let mostFrequentCount = count1 > count0 ? count1 : count0;
// console.log(mostFrequentCount);

let arr = ['1', '0', '0', '1', '1', '0', '1', '1', '1', '0'];
let count = {};

for (let i = 0; i < arr.length; i++) {
    if (count[arr[i]] === undefined) {
        count[arr[i]] = 1;
    } else {
        count[arr[i]]++;
    }
}

let maxCount = 0;

for (let key in count) {
    if (count[key] > maxCount) {
        maxCount = count[key];
    }
}

console.log(maxCount);

