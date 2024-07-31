const input=require("readline-sync")
// const person ={
//     firstname:"john",
//     lastname: "doe",
//     age:50,
//     eyecolor:"blue"
// }
// delete person["age"]
// console.log(person);

// myog={
//     name:"john",
//     age:30,
//     mycars:{
//         car1:"ford",
//         car2:"bmw",
//         car3:"fiat"
//     }
// }
// console.log(myog);

// const person={
//     firstname:"riya",
//     lastname:"chauhan",
//     id:2000,
//     fullname:function(){
//         return this.firstname + " " + this.lastname;
//     }
// };
// //console.log(person.fullname());


// function myfunction(num1,num2)
// {
//     return num1*num2;
// }
// console.log(myfunction(5,6))


// function addsum(parameter1,parameter2)
// {
//   let sum = parameter1+parameter2;
//   console.log(sum);
// }
// addsum(8,7);
// const person={
//     firstname: "riya",
//     lastname: "chauhan",
//     id: 2000,
//     fullname:function(){
//         return this.firstname+" "+this.lastname;
//     }
// }
// console.log(person.fullname());

// function myfunction(num1,num2){
//     return num1*num2;
// }
// console.log(myfunction(9,6));

// function addsum(par1,par2){
// let sum=par1+par2;
// console.log(sum);
// }
// addsum(5,9)

// let fruits = ['apple', 'banana', 'cherry'];

// for (let fruit of fruits) {
//     console.log(fruit);
// }

// let studentGrades = { Alice: 90, Bob: 85, Charlie: 92 };

// for (let student in studentGrades) {
//     console.log(`${student}: ${studentGrades[student]}`);
// }

// let studentGrades = new Map([
//     ['Alice', 90],
//     ['Bob', 85],
//     ['Charlie', 92]
// ]);

// for (let [student, grade] of studentGrades) {
//     console.log(`${student}: ${grade}`);
// }

/*FOR OF LOOP*/ 

//  let a=[1,2,3,4]
//  for(i of a){
//     console.log(i);
//  }

// let fruits=['apple','banan','cherry'];

// for(let fruit of fruits){
//    console.log(fruit);
// }



// let i=0;
// do{
//     console.log("hey riya");
//     i++;
// }
// while(i<5);


// if (!5 || !6){
//     console.log(5 + 6)
// }


/*OBJECT*/

// let alian={
//     name: 'riya',
//     tech: 'js',
//     'age year': 23,
// }
// console.log(alian['age year']);


/*COMPLEX OBJECTS*/

// let alian={
//     name: 'riya',
//     tech: 'js',

// laptop:{
//     brand: 'asus',
//     ram:  4,
//     cpu: 'i7'
// }
// }
// console.log(alian.laptop.cpu.length);

/*GLOBAL SCOPE*/

// let x = 10; // Global variable

// function myfunction(){
// console.log(x);  //Global variable ka use
// }
// myfunction();
// console.log(x);


// LOCAL SCOPE

function myfunction(){
   let y =20;  ///LOCAL VARIABLE
console.log(y);
}
myfunction();
