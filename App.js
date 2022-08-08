let num1 = 34;
let num2 = 45
let num3 = "10"

let word1 = "Hello"

// CONTROL FLOW
// statement to buy salt
let item = "Annapurna";
// let item = "Gino";  
// condition if salt is Annapurna, if 
if (item === "Annapurna") { 
    console.log("Buy Annapurna");

} else if (item === "U2"){
    console.log("Buy U2");
} else if (item === "A1"){
    console.log("Buy A1");

    // let item = "Gino"; 
} else {
    console.log("Buy Rocky Salt");
}

// GRADING SYSTEM

let score = 90;
// for && operator to be true  then all condition needs to be true. "or" needs only one true to run

if (score>=90) {
    console.log("Excellent");

} else if (score >= 80) {
    console.log("Very Good");
} else if (score >= 70) {
    console.log("Good");
} else if (score >=60) {
    console.log("Average");
} else if (score >=50){
    console.log("Credit");
} else if (score >=40) {
    console.log("Pass");
}  else if (score >=0) {
    console.log("Fail");
}

// for && operator to be true  then all condition needs to be true. "or" needs only one true to run
if (score >= 90 && score <=100){
    console.log("Excellent");
}

// let score = 100;
// if (score >= 0 && score <=100) {
//     console.log(Please Enter a valid score )
// }

// FUNCTION
// let x=10
// let y=20

function sum(x, y) {
    let total = x + y;
    return total;

   // the console down becomes dead
    console.log(x + y)
}

sum(10, 20);
sum(7, 8);
sum(9, 10);

// the word "eleven, fifteen, etc" can be any variable like "A, KWEKU, mansah"
let eleven = sum(5, 6);
let fifteen = sum(7, 8);
let nineteen = sum(9, 10);


// multiplication
function multiply(a, b) {
    console.log(multiply);
    let total = a * b;
    return total;


}

let math = multiply(7, 3);
console.log(math);

let c = multiply(5, 6);
let m = multiply(7, 8);
let f = multiply(9, 10);

console.log(c);

function multiply(a=1,b=0){
    let d=a*b;
    return d;
}


let x = multiply(20);
let y = multiply(3,40);
console.log(y);

//LOOP
//for loop
for (let i = 1;i <=10;i++) {
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    console.log(i+". I will not talk in class again");
}

//while loop (we declare the initializer outside the parenthesis)

let num = 1;
while (num <= 10) {
    console.log(num);

    num = num + 1
}

//do .......while loop

// let age = 1;
// do {
//     console.log("You can't vote");
//     age++;
// } while (age <18);

// or

let age = 1;
do {
    console.log(age + ". You can't vote");
    age++;
} while (age < 18);

//aRRAY mETHOD
let ages = [19, 26, 24, 18, 22, 35, 30, 31, 29]
//NB use "of" is for the Array but "in" is used for the object and brings the items out
for  (let age of ages) {
    console.log(age);
    // this gives the index of each element
}

let Ages = [19, 26, 24, 18, 22, 35, 30, 31, 29];
// for  (let age of Ages) {
//     console.log(Math.pow(age,2));
// }

let marriage = ages.filter((num) => num > 25);
console.log(marriage);

let maritalStatus = ages.filter(function (Dav) {
    return Dav > 30
    
});
console.log(maritalStatus);

//Map

let squares = ages.map((age) => age * age);
// console.log(squares)

// or

let squares1 = ages.map((age) => (Math.pow(age,2)));
console.log(squares1)

//find 

let eighteen = ages.find((age) => age == 26);
console.log(eighteen);