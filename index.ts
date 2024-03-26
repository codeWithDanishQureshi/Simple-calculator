#! /usr/bin/env node

import inquirer from "inquirer";

// printing a Wellcome Message
console.log("\n\tWellcome To \'CodeWithDanish\' - CLI Simple Calculator\n");
 
// Asking Question from Users through Inqurier

let answers = await inquirer.prompt([
      { message : "Enter First Number", type: "number", name: "firstNumber"},
      { message : "Enter Second Number", type: "number", name: "secondNumber"},
      {
      message: "select one operator to perfom Operators",
      type: "list",
      name: "operator",
      choices: ["Addition", "Subtrations", "Muliplication", "Division"],
},
]);

//  Conditional statments If-Else

if(answers.operator === "Addition"){
    console.log(answers.firstNumber + answers.secondNumber)
}
else if (answers.operator === "Subtrations"){
    console.log(answers.firstNumber - answers.secondNumber)
}
else if (answers.operator === "Muliplication"){
     console.log(answers.firstNumber * answers.secondNumber)
}
else if (answers.operator === "Division"){
    console.log(answers.firstNumber / answers.secondNumber)
    }
    else{
        console.log("Invalid Input")
    }