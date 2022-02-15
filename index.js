console.log('Hello World');

// Variables
let firstName = "Joe";
console.log(firstName);

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

let age = 30;
let isApproved = true;

// Object has key-value pairs
let person = {
    name: "Clint",
    age: 40
};

// Dot Notation
person.name = "Harry";

// Bracket Notation
person['age'] = 50;

console.log(person);

// Array
let selectedColor = ['red', 'blue'];
selectedColor[2] = 'green';
selectedColor[3] = 18;
console.log(selectedColor);
console.log(selectedColor[0]);
console.log(selectedColor.length);

// Functions
function greet(){
    console.log('Hey Joe');
}

greet();

function greetVariableName(name, lastName) {
    console.log('Hi ' + name + ' ' + lastName);
}

greetVariableName('Jim', 'Connor');
greetVariableName('Mary');

function square(number){
    return number * number;
}

let number = square(2);
console.log(number);
console.log(square(4));