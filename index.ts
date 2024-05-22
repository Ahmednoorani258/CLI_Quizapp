#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
let score = 0;
async function logic(name1: string, type1: "list" | "input", question1: string, choices1: string[], correctAns: string): Promise<void> {
    const ans = await inquirer.prompt({
        name: name1,
        type: type1,
        message: chalk.yellow(question1),
        choices: choices1,
    });
    if (ans[name1] === correctAns) {
        console.log(chalk.green(`\nCorrect Answer\n`));
        score += 1;
    } else {
        console.log(chalk.red(`\nWrong Answer\n`));
    }
}

(async () => {
    await logic("q1", "list", "Who is the founder of Pakistan", ["Quaid-e-Azam", "Liaquat ali khan", "Ghafoor ahmed", "Allama iqbal"], "Quaid-e-Azam");
    await logic("q2", "list", "What does the acronym DOM stand for", ["Document Object Model", "Data Object Model", "Dynamic Object Model", "Document Orientation Method"], "Document Object Model");
    await logic("q3","list","Which keyword is used to declare variables in JavaScript",["var","let","const","def"],"let")
    await logic("q4","list","What does NaN stand for in JavaScript",["Not a Nul","Not a Node","Not a Number","Not a Newline"],"Not a Number")
    await logic("q5","list","Which method is used to add a new element at the end of an array",["push()","pop()","unshift()","shift()"],"push()")
    await logic("q6","list","What is the output of typeof []",["object","array","list","undefined"],"object")
    await logic("q7","list","Which operator is used for strict equality comparison",["==","===","=","!=="],"===")
    await logic("q8","list","What does the parseInt() function do in JavaScript?",["Parses a string and returns a floating-point number","Parses a string and returns an integer","Parses a string and returns a string","Parses a string and returns a boolean"],"Parses a string and returns an integer")
    await logic("q9","list","What is the purpose of the addEventListener() method in JavaScript?",["To remove an event listener from an element","To trigger an event on an element","To create a new event","To add an event listener to an element"],"To add an event listener to an element")
    await logic("q10","list","Which built-in method reverses the order of the elements in an array",["sort()","splice()","slice()","reverse()"],"reverse()")
    await logic("q5","list","Which method is used to add a new element at the end of an array",["push()","pop()","unshift()","shift()"],"push()")
    
    console.log(chalk.yellow(`\ntotal marks: 10`))
    console.log(chalk.yellow(`Obtained Marks: ${score}`));
})();