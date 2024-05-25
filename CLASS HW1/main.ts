import inquirer from "inquirer";

// 1. Miles-to-Kilometers Converter (Operators):
// • Create a variable named miles and assign a numeric value representing distance in miles.
// • Calculate the equivalent distance in kilometers using the conversion factor (1 mile =
// 1.60934 kilometers). You can achieve this by multiplying miles by 1.60934.
// • Store the converted distance in kilometers in a variable named kilometers.
// • Use console.log to print a message in the following format:
// The distance of 130 kms is equal to 209.2142 miles

let miles = 130;
let kiloMeters = miles * 1.60934;
console.log(`The distance of ${miles} mil is equal to ${kiloMeters} km`);

// // 2.Evaluating a number game:
// // • Prompt the user to enter a number.
// // • Compare the entered number with a dynamic number value.
// // • Output the result indicating whether the entered number is greater than, equal to, or less
// // than the dynamic number value.

let hasWon = false;
do {
  let numberGame = await inquirer.prompt([
    {
      message:
        "Guess a number between 0 to 10 if you guess correct you will win",
      type: "number",
      name: "number",
    },
  ]);

  let computerGeneratedNumber = Math.floor(Math.random() * 10);
  console.log(computerGeneratedNumber);

  if (computerGeneratedNumber === numberGame.number) {
    console.log("You won!");
    break;
  } else {
    console.log("You Lost!, please guess again");
  }
} while (!hasWon);

// // 3.Friend checker game:
// // • Prompt the user to enter a name.
// // • Use a switch statement to check if the entered name is a known friend.
// // • Output a confirmation message if the name is known, otherwise output a default
// // response

let name = await inquirer.prompt([
  {
    type: "string",
    name: "name",
    message: "Enter your name",
  },
]);

let userGuessedName;
switch (name.name) {
  case "Azan":
  case "Anus":
  case "Ayesha":
  case "Aziz":
  case "Ashiq":
    userGuessedName = "You are my friend";
    break;

  default:
    userGuessedName = `You are not my friend`;
}

console.log(userGuessedName);

// // Functions:
// // • Set up two different variables with different values.
// // • Call a function with these variables as arguments and output the result using console.log.
// // • Create a second call to the function with two more numbers as arguments.

let num1 = 10;
let num2 = 20;

function Numbre(Number1: number, Number2: number, Number3?: number) {
  let sum = Number1 + Number2;
  return sum;
}

console.log(Numbre(num1, num2));
console.log(Numbre(23, 56));

// 3.Calculator project using function:
// • Set up two variables containing number values.
// • Set up a variable to hold an operator (+ or -).
// • Create a function that takes two numbers and an operator as parameters, performs the
// corresponding operation, and returns the result.
// • Call the function with the variables and operator, and output the result using console.log.
// • Update the operator value and call the function again with the updated arguments.

let num0 = 10;
let num3 = 20;
let operator = "-";

function Calculator(num1: number, num2: number, Operator: string) {
  switch (Operator) {
    case "-":
      return num1 - num2;
      break;

    case "+":
      return num1 + num2;
      break;

    default:
      return "Invaled Operator";
      break;
  }
}

console.log(Calculator(num0, num3, operator));
console.log(Calculator(1, 2, "*"));
console.log(Calculator(num0, num3, operator));

// 4.Anonymous functions:
// • Assign a function expression to a variable, with one parameter that outputs the provided
// argument to the console.
// • Pass an argument into the function.
// • Create the same function as a normal function declaration.

let AnonymousFunction = function (Name: string) {
  console.log(Name);
};

AnonymousFunction("Hello World");

function AnonymousFunctio(Name: string) {
  console.log(Name);
}

AnonymousFunctio("Hello World");

//
