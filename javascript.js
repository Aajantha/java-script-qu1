//Question 1
function fullName (firstName,lastName){
    return firstName +""+lastName
}
 console.log (fullName ("Ajantha","Anandharajah"));

//Question 2
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

//Question 3
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

//Question 4
let Text = "There is a commonly stated “rule” of grammar that beginning a sentence with and, or any other conjunction, is a mistake. But this is just not true. This supposed “rule” has no basis in actual writing, and even formal writing features plenty of sentences that start with and and other conjunctions. And we think that is really cool.";
let andCount = (Text.match(/\band\b/gi) || []).length;
console.log(andCount);

//Question 5
var currency = new Date();
var currencyYear = currency.getFullYear();
console.log(currencyYear);

var currency = new Date();
var month = currency.getMonth() + 1; 
console.log(month);

var currency = new Date();
var date = currency.getDate(); 
console.log(date);


var currency = new Date();
var day = currency.getDay(); 
console.log(day);

//Q6
// y=mx+c
//y=2x-2
function straightline(m,c){
    const slope = m;
    const yIntercept = c;
    const xIntercept = -c/m;
    return `Slope: ${slope},\n Y-Intercept: ${yIntercept},\n X-Intercept: ${xIntercept}`;
  }
  console.log(straightline(2,-2));
  
  //Question7
  // (2,2),(6,10)
  function calculateslope(x1,y1,x2,y2){
    const slope1 = (y2-y1)/(x2-x1);
    return `slope:${slope1}`
  }
  console.log(calculateslope(2,2,6,10));
  
  // Question 8
  // weeklyearnings=h*rs/h
  const hours = prompt("Enter hours:");
  const rateperHour = prompt("Enter Rate Per Hour:");
  const weeklyearnings = hours * rateperHour;
  alert(`Your weekly earning is ${weeklyearnings}`);

// 09
  function checkDrivingEligibility(birthYear) {
    // Get the current year
    const currentYear = new Date().getFullYear();
    
    // Calculate the user's age
    const age = currentYear - birthYear;
    
    // Check if the user is 18 or older
    if (age >= 18) {
        console.log(`You are ${age}. You are old enough to drive.`);
    } else {
        const yearsToWait = 18 - age;
        console.log(`You are ${age}. You will be allowed to drive after ${yearsToWait} year${yearsToWait > 1 ? 's' : ''}.`);
    }
}

   // Question 9
  // age=current year-birthyear
  // const currentyear = new Date().getFullYear();
  // const years = prompt("Enter your birth year:");
  // const age = currentyear-birthyear;
  // if(age >= 18){
  //    alert(`You are:${age}. You are old enough to drive.`);
  // }else{
  //    const wait = 18- age;
  // alert(`You are:${age}. You will be allowed to drive after${wait} years.`);
  // }
  
  // Question 10
  const numbers = [1,2,3,4,5,6,7];
  const evenNumbers = numbers.filter(function(number){
   return number%2===0;
  });
  console.log("Even Numbers:",evenNumbers);
  
  // Question 11
  const Numbers10= [1,2,3,4,5];
  const squareNumbers = Numbers10.map(function(number ){
   return number * number;
  });
  console.log("Square Numbers:",squareNumbers);
  
// Question 12
//filer method 

  const books = [ 
   {
    title: "To Kill a Mockingbird",
    author: "Harper Lee", 
    genre: "Fiction",
    pages: 336, 
    publication_year: 1925, 
   }, 
   { 
   title: "1984", 
   author: "George Orwell",
   genre: "Dystopian",
   pages: 328, 
   publication_year: 1949,
    }, 
   {
    title: "Pride and Prejudice", 
    author: "Jane Austen",
    genre: "Romance",
    pages: 432, 
    publication_year: 1813,
    }, 
   {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald", 
    genre: "Classic", 
    pages: 180,
 publication_year: 1925,
 },
 ]; 

const filterbookbypage = books.filter((books) =>{return books.pages >100;},{});
console.log(filterbookbypage);


const filterbookbypage1= books.filter((books) =>{return books.pages < 200;},{});
console.log(filterbookbypage1);

const  genreofFiction = books.filter((books) =>{return books.genre  ==="Fiction";},{});
console.log(genreofFiction);
//map method

const titles = books.map((books) => {return books.title;});
console.log(titles);

const author = books.map((books) => {return books.author;});
console.log(author);

const titlesauthor = books.map((books) => {return books.author;});
console.log(titlesauthor);

//raduce
const totalNumber = books.reduce((sum,books) => {return sum + parseInt(books.pages);},0);
console.log("total number of pages is " + totalNumber);

const totalNumberBypublication = books.reduce((result,books) => {
   if(typeof result[books.publication_year] === "undefined") {
      result[books.publication_year] = 1;
   }
   else { result[books.publication_year] +=1;}
   return result;
},{});
console.log(totalNumberBypublication);

//Question 13 Arrow function 
const greets = name => {
   return `Welcome ${name} to the team.`;
 };
 
 console.log(greets('Ran')); // "Welcome Ran to the team."
 console.log(greets('Sara')); // "Welcome Sara to the team."

 //Question 14 arrow funtion um math.floor useing
 const litres = time => {
   return Math.floor(time * 0.5);
 };
 
 console.log(litres(0)); // 0
 console.log(litres(2)); // 1
 console.log(litres(1.4)); // 0

 //Question 15 reduce using and if condiction, arrow funtion
 const positiveSum = arr => {
   return arr.reduce((acc, num) => {
     if (num > 0) {
       return acc + num;
     } else {
       return acc;
     }
   }, 0);
 };
 
 console.log(positiveSum([1, 2, 3, 4, 5])); // 15
 console.log(positiveSum([1, -2, 3, 4, 5])); // 13
 console.log(positiveSum([-1, 2, 3, 4, -5])); // 9
 console.log(positiveSum([-1, -2, -3, -4, -5])); // 0
 console.log(positiveSum([])); // 0

 //Question 16 switch method
 function calculateBMI(weight, height) {
  // Calculate BMI
  const bmi = weight / (height * height);

  // Determine the BMI category using a switch statement
  switch (true) {
    case bmi < 18.5:
      return "Underweight";
    case bmi >= 18.5 && bmi <= 24.9:
      return "Normal weight";
    case bmi >= 25 && bmi <= 29.9:
      return "Overweight";
    default:
      return "Obese";
  }
}

// Test the function
const weight = 70; // kilograms
const height = 1.75; // meters
const result = calculateBMI(weight, height);
console.log("BMI Category: ", result);

 //Q17 ternary ? if va kurikum :else kurikum
 function checkNumber(num) {
  // Use ternary operator to determine the result
  return num >= 0 ? "Positive" : "Negative";
}

// Test the function
const number = 5; // You can change your number here
const result1 = checkNumber(number);
console.log("The number is: ", result1);

//Q18 sitckely euqal ternary// if and ? aha iruntha even number varrum  else enda : poda varum
function checkEvenOrOdd(num) {
  // Use ternary operator to check if the number is even or odd
  return num % 2 === 0 ? "Even" : "Odd";
}

// Test the function
const numb = 7; // You can change your number here
const result2 = checkEvenOrOdd(numb);
console.log("The number is: ", result2);

//Q19
function EvenOdd(numBer) {
  // Use the ternary operator to check if the numBer is even or odd
  const Result = (numBer % 2 === 0) ? "Even" : "Odd";
  return Result;
}

// Example usage some numBer
const numBer = 8;
console.log(`The number ${numBer} is ${EvenOdd(numBer)}.`);


 //Q20
 function findGreaterNumber(a, b) {
  // Use the ternary operator to determine the greater number
  const greaterNumber = (a > b) ? a : b;
  return greaterNumber;
}
//using
const Numeight = 10;
const Numnine = 20;
console.log(`The greater number between ${Numeight } and ${Numnine} is ${findGreaterNumber(Numeight ,Numnine)}.`);

//Q21
function getTicketPrice(age) {
  // Using the ternary operator to determine the ticket price based on age
  const ticketPrice = (age < 12) ? 5 :
                      (age < 18) ? 10 :
                      (age < 60) ? 20 : 15;
  return ticketPrice;
}

// Example usage
const Age = 25;
console.log(`The ticket price for age ${Age } is ${getTicketPrice(Age)}.`);

// some examples
const age1 = 10;
const age2 = 15;
const age3 = 45;
const age4 = 65;

console.log(`The ticket price for age ${age1} is ${getTicketPrice(age1)}.`);
console.log(`The ticket price for age ${age2} is ${getTicketPrice(age2)}.`);
console.log(`The ticket price for age ${age3} is ${getTicketPrice(age3)}.`);
console.log(`The ticket price for age ${age4} is ${getTicketPrice(age4)}.`);

//Q22
let YEAR=2020;
let isleep=isleepyear(YEAR);
function isleepyear(YEAR){
  if(YEAR% 4===0){return true}
};
console.log(`The year ${YEAR} is ${isleep?"":'not'}a leep year.`);//Qs1
function fullName (firstName,lastName){
    return firstName +""+lastName
}
//  loop
// que1
for (let i = 0; i <= 5; i++) {
  console.log(i);
}
// que2
let sum1 = 0;
for (let i = 0; i < 100; i++) {
    sum1 += i;
}
console.log("Sum from 0 to 99 is:", sum1);

// que3
let sum2 = 0;
for (let i = 10; i <= 100; i += 2) {
    sum2 += i;
}
console.log("Sum of even numbers from 10 to 100 is:", sum2);

// que4
let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}
// que5


