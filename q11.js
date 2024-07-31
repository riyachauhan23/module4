/*FUNCTION*/

// const input=require("readline-sync")
// let n=input.question("enter the number :")
// let b=input.questionInt("enter the second number :")

// function add(a,b){
//     return a+b;
// }
// console.log(add(a,b));


// function iseven(n){
//     return n%2===0;
// }
// console.log(iseven(n));

// const input=require("readline-sync")
// let n=input.question("enter the name :")

// function reverseString(str){

//    let ring=str.split('');
//    let vrse=ring.reverse();
//    let joinus=vrse.join('');

//    return joinus;

// }
// console.log(reverseString(n));



const input=require("readline-sync")
let n=input.questionInt("enter the lenght of number :")


function findMax(numbers) {
    if (numbers.length === 0) {
        return undefined; 
    }

    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i]; 
        }
    }

    return max; 
}
let array = [10, 20, 30, 50, 15,80];
console.log(findMax(array)); 
