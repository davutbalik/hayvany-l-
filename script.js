let myAge = prompt("Enter your age:"); //set it equal to your age as a number.
let earlyYears = 2 ; //Note, the value saved to this variable will change. 
earlyYears *=10.5 ; 
let laterYears = myAge - 2; //Set the result equal to a variable called laterYears. We’ll be changing this value later.
laterYears *=4 ;
console.log(earlyYears);
console.log(laterYears);
let myAgeInDogYears = earlyYears + laterYears; // My age in dog years.
console.log(myAgeInDogYears) ;
let myName = prompt("What is your name?").toLowerCase(); // My name in lower case.
console.log(myName) ;
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`); // Print my statement.
alert(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);



/*
10.
Great work! You can convert any human age to dog years. Try changing myAge and see what happens.
If you’d like extra practice, try writing this project without the *= operator.

11.
Additional step. Reverse your work. You can convert any dog age to human years. Try changing variables and calculations.

12.
Change your code using prompt to input your age, and alert the result.

13.
Prepare a Readme file and send your work to the github account.

14.
Challange!
Here’s new convertion from “tortoise years” to “human years”:
The first year of a tortoise’s life count as 12 human years.
Each year following equates to 10 human years.
Make a solution to alert like this:*/