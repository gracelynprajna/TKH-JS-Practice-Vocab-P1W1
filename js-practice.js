//Complete the instructions for each numbered problem test!!

//1. data types built-in methods, variables 

//a. define a variable and give it a string value
var name = 'Gracelyn';

//b. define a variable and give it a number value
var x = 100;

//c. define a variable and give it a boolean value
Boolean(1 > 2)

//2. if else, ternary 
//a. define a variable 'metrocard' and give it a value of 5
var metrocard = 5;

//b. write an if statement that has a condition to check if the value of metro card is greater than 2.75, and display the message "you have enough to ride the train", if the condition is true
var metrocard = 5;
if (metrocard > 2.75){
console.log("You have enough to ride the train!");
} 

//c.write an else statement that displays the message "you do not have enough to pay fare sorry"
var metrocard = 5;
if (metrocard > 2.75){
console.log("You have enough to ride the train!");
}else
{
console.log("You do not have enough to pay fare sorry");
}

//d. write the above if/else statement again as a ternary 
var metrocard = 5, msg = "";
msg = (metrocard > 2.75) ? "You have enough to ride the train!" : "You do not have enough to ride the train sorry!";
console.log(msg);

//3. conditionals 2 (1 pt)
//a.  complete this codecademy project: https://www.codecademy.com/courses/introduction-to-javascript/projects/magic-eight-ball-1 
//add a screenshot showing your completion of this project to the root folder of this repo

//4. functions 
//a. write a function named helloWorld that returns the value 'Hello World!' 
function helloWorld() {
    return "Hello World!";
  };
//b. console log the value returned from running the function helloWorld
function helloWorld() {
    return "Hello World!";
  };
  console.log(helloWorld());  
//3. arrays
//a. define a variable myArray and assign it to a value of an array. Give the array at least 5 elements
const myArray = ["strawberry", "apple", "grape", "blueberry", "orange"];
//b. an array's index starts at:
// 0

//4. loops 
//a. write a for loop that console logs even numbers starting at 10 and decrementing to 0 
for (let i = 10; i >= 0; i -= 2) {
    console.log(i);
 }
//5. objects
//a. define a variable named 'bike' 
var bike = {};

//b. assign an object to bike 
var bike = {obj}

//c. give the object 3 properties: handlebars, color, wheels 
obj.handlebars =
obj.color =
obj.wheels =

//d. give each property a value 
obj.handlebars = 'long';
obj.color = 'pink';
obj.wheels = 'round';
//6. Chessboard
/*Write a function that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

read and refer to https://eloquentjavascript.net/02_program_structure.html  there are hints at the bottom of the page 
*/




