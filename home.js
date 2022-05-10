/*console.log('hello samra');

//This is how you write a comment
//alert('Disclaimer: javascript called by src');

Variable

var temp = 'Hello world';
console.log(temp);

var num = 1234;
console.log(num);

//saving the response of prompt in a variable and showing it on the page
var age = prompt('What is your age?');
document.getElementById('gettingElement').innerHTML=age;


//Numbers in js
number = 22;
console.log(number);

//Increment number by 1
number++
console.log(number);

//Decrement number by 1
number--
console.log(number);

//Incremenet/decrement number by any number

 number = 22;
console.log(number);

number+=20;
console.log(number);

//Function
//Creating a function
function func(){
  alert('This is a function');
}

//Calling a function
func();


function greetings(yourName){
var result = 'Hello' + ' ' + yourName; //String concatenation
console.log(result);

}
var name= prompt('What is your name?');
greetings(name);

//Arguments in function

function sumOfNumbers(num1, num2){
  var sum = num1+num2;
  console.log(sum);
}
sumOfNumbers(1, 2);

//While loop

var num=0;
while(num<100){
num+=1;
console.log(num);
}

//For loop

for(let num=0; num<=100; num++){
  console.log(num);
}

//Datatypes 

let age = 22; //number
let name = 'Samra'; //string
let yourName = {First: 'Samra', Last: 'Khan'}; //object
let a = false; //boolean
//let groceries = ['apple', 'noodles', 'banana']; //array
let random; //undefined
let nothing = null; //value NULL

//Common methods of strings in javascript

let fruit = 'banana';
//let fruits = 'apple\nmango\ncherry'; //new line
let fruits = ['strwaberry', 'cherry', 'mango', 'apple'];
console.log(fruit.length);
console.log(fruit.indexOf('an')); //returns the index number from where it starts
console.log(fruit.slice(2, 4)); //slices the word from to
console.log(fruit.replace('ban', 1234));// replaces the word from to
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2)); // returns the character at index 2
console.log(fruit[2]); // returns the character at index 2
console.log(fruit.split(''));  //splits by character 
console.log(fruit.split(',')); //splits by comma

//Arrays in javascript

let vegetable = ['potato', 'tomato', 'onion']; //one way to declare array
let vegetables = new Array('tomato', 'potato', 'brinjel'); // another way

console.log(vegetable[2]); // accessing value by index number
console.log(vegetables[2]);

vegetable[2]= 'spinach'; // changing value with index number
console.log(vegetable);

for(let i=0; i<vegetable.length; i++){
console.log(vegetable[i]);
}

//Array common methods
console.log('to String', vegetable.toString()); // stringify the values of vegetable array
console.log(vegetable.join('*')); //joins by given *
console.log(vegetables.pop(), vegetables); // removes last item of array
console.log(vegetable.push('corriander'), vegetable); //appends or adds item after the last index
vegetable[4] = 'new vegie'; // another way to append
console.log(vegetable);

vegetable[vegetable.length] = 'carrot'; //smart way to append

//console.log(vegetable);

vegetable.shift(); // removes first element from array
//console.log(vegetable);

vegetable.unshift('mint'); // adds first element to an array
//console.log(vegetable);

let groceries = vegetables.concat(fruits); // combine concatinate arrays 
//console.log(groceries);

//console.log(groceries.reverse()); // reversing an array
console.log(groceries.sort()); // sorting an array 

let number = [90, 12, 3, 56, 22, 15, 2, 0];

console.log(number.sort()); // It will not sort the arry of numbers

//to sort array of numbers in ascending order
console.log(number.sort(function(a,b) {
  return(a-b);
}));

//to sort array of numbers in descending order
console.log(number.sort(function(a,b) {
  return(b-a);
}));

//define an empty array and push values with for loop
let emptyArray= new Array();
for(let i=0; i<=10; i++){
  emptyArray.push(i);
}
console.log(emptyArray);

//Objects in javascript
let student = {
  firstname: 'Samra',
  lastname: 'Khan',
  age: 22,
  //object oriented programing basics in javascript
  studentInfo: function(){
    return this.firstname + '\n' + this.lastname + '\n' + this.age;
  }
};

student.firstname = 'Sadaf'; // change value of element of object
console.log(student.firstname);
student.age++;
console.log(student.age);

console.log(student.studentInfo());

//IF statement in javascript
let yourAge = prompt('What is your age');
if(yourAge>=18 && yourAge<=35){
  status= 'My audience';
}
else{
  status= 'Not my audience';
}
console.log(status);

//SWITCH statement in javascript
//0-4 weekday
//5-6 weekend

switch(0) {
case 5: 
  text = 'weekend';
  break;

case 6:
  text = 'weekend';
  break;

default:
  text = 'weekday';

}
console.log(text);
*/