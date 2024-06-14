#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//  function for general knowledge Quiz  //
async function general_quiz() {
    let score = 0;
    let question_1 = await inquirer.prompt([
        {
            name: "answer",
            type: "rawlist",
            message: chalk.cyanBright("\nQ.1) What is the capital of France?\n"),
            choices: [
                "Berlin",
                "Madrid",
                "Paris",
                "Rome"
            ]
        }
    ]);
    if (question_1.answer === "Paris") {
        score++;
    }
    let question_2 = await inquirer.prompt([
        {
            name: "answer",
            type: "rawlist",
            message: chalk.cyanBright("\nQ.2) Which planet is known as the Red Planet?\n"),
            choices: [
                "Earth",
                "pluto",
                "Jupiter",
                "Mars"
            ]
        }
    ]);
    if (question_2.answer === "Mars") {
        score++;
    }
    let question_3 = await inquirer.prompt([
        {
            name: "answer",
            type: "rawlist",
            message: chalk.cyanBright("\nQ.3) Who wrote the play 'Romeo and Juliet'?\n"),
            choices: [
                "Charles Dickens",
                "jane Austen",
                "William Shakespeare",
                "Mark Twin"
            ]
        }
    ]);
    if (question_3.answer === "William Shakespeare") {
        score++;
    }
    let question_4 = await inquirer.prompt([
        {
            name: "answer",
            type: "rawlist",
            message: chalk.cyanBright("\nQ.4) What is the largest mammal in the world?\n"),
            choices: [
                "Elephant",
                "Blue Whale",
                "Giraffe",
                "Great White shark"
            ]
        }
    ]);
    if (question_4.answer === "Blue Whale") {
        score++;
    }
    let question_5 = await inquirer.prompt([
        {
            name: "answer",
            type: "rawlist",
            message: chalk.cyanBright("\nQ.5) Which element has the chemical symbol 'O'?\n"),
            choices: [
                "Oxygen",
                "Gold",
                "osmium",
                "Zinc"
            ]
        }
    ]);
    if (question_5.answer === "Oxygen") {
        score++;
    }
    let question_6 = await inquirer.prompt([
        {
            name: "answer",
            type: "rawlist",
            message: chalk.cyanBright("\nQ.6) President of the United States?\n"),
            choices: [
                "Abraham Lincolin",
                "Thomas jefferson",
                "George Washington",
                "John Adams"
            ]
        }
    ]);
    if (question_6.answer === "George Washington") {
        score++;
    }
    let question_7 = await inquirer.prompt([
        {
            name: "answer",
            type: "rawlist",
            message: chalk.cyanBright("\nQ.7) What is the currency of Japan?\n"),
            choices: [
                "Yen",
                "Dollar",
                "Euro",
                "Pound"
            ]
        }
    ]);
    if (question_7.answer === "Yen") {
        score++;
    }
    let question_8 = await inquirer.prompt([
        {
            name: "answer",
            type: "rawlist",
            message: chalk.cyanBright("\nQ.8) Which is the smallest country in the world?\n"),
            choices: [
                "Monaco",
                "Vatican City",
                "San Manrio",
                "Liechtenstein"
            ]
        }
    ]);
    if (question_8.answer === "Vatican City") {
        score++;
    }
    let question_9 = await inquirer.prompt([
        {
            name: "answer",
            type: "rawlist",
            message: chalk.cyanBright("\nQ.9) In which year did the Titanic sink?\n"),
            choices: [
                "1910",
                "1912",
                "1856",
                "1923"
            ]
        }
    ]);
    if (question_9.answer === "1912") {
        score++;
    }
    let question_10 = await inquirer.prompt([
        {
            name: "answer",
            type: "rawlist",
            message: chalk.cyanBright("\nQ.10) What is the largest desert in the world?\n"),
            choices: [
                "Gobi Desert",
                "Arabian Desert",
                "Sahara Desert",
                "Antartic Desert"
            ]
        }
    ]);
    if (question_10.answer === "Sahara Desert") {
        score++;
    }
    let result_consent = await inquirer.prompt([
        {
            name: "user_consent",
            type: "list",
            message: chalk.cyanBright("\nWanna know your final score?\n"),
            choices: ["YES", "NO"]
        }
    ]);
    if (result_consent.user_consent === "YES") {
        if (score === 10) {
            console.log(chalk.greenBright(`Your total score is ${chalk.magentaBright(score)}/10,Excellent Job!! smarty!`));
        }
        else if (score === 5) {
            console.log(chalk.greenBright(`Your total score is ${chalk.blueBright(score)}/10,Bruh you're dumb as hell`));
        }
        else if (score < 5) {
            console.log(chalk.greenBright(`Your total score is ${chalk.redBright(score)}/10,You failed the test :/, How dumb are you??`));
        }
        else if (score === 6) {
            console.log(chalk.greenBright(`your total score is ${chalk.cyanBright(score)}/10,lol what an embarassing score ngl`));
        }
        else {
            console.log(chalk.greenBright(`your total score is ${chalk.redBright(score)}/10,mehhh ,could've done better`));
        }
    }
    else {
        console.log(chalk.redBright("Exiting quiz..."));
        process.exit();
    }
}
//  function for typescript Quiz  //
async function typescript_quiz() {
    let score = 0;
    let question_1 = await inquirer.prompt([
        {
            name: "answer",
            type: "rawlist",
            message: chalk.cyanBright("\nQ.1) What is the file extension for TypeScript files?\n"),
            choices: [
                ".js",
                ".ts",
                ".css",
                ".html"
            ]
        }
    ]);
    if (question_1.answer === ".ts") {
        score++;
    }
    let question_2 = await inquirer.prompt([
        {
            name: "answer",
            type: "rawlist",
            message: chalk.cyanBright("\nQ.2) How do you declare a string variable in TypeScript?\n"),
            choices: [
                "let name: number;",
                "let name: string;",
                "let name: boolean;",
                "let name: object;"
            ]
        }
    ]);
    if (question_2.answer === "let name: string;") {
        score++;
    }
    let question_3 = await inquirer.prompt([
        {
            name: "answer",
            type: "rawlist",
            message: chalk.cyanBright("\nQ.3) What keyword is used to declare a constant?\n"),
            choices: [
                "var",
                "let",
                "const",
                "final"
            ]
        }
    ]);
    if (question_3.answer === "const") {
        score++;
    }
    let question_4 = await inquirer.prompt([
        {
            name: "answer",
            type: "rawlist",
            message: chalk.cyanBright("\nQ.4) Which type is a primitive in TypeScript?\n"),
            choices: [
                "number",
                "array",
                "object",
                "function"
            ]
        }
    ]);
    if (question_4.answer === "number") {
        score++;
    }
    let question_5 = await inquirer.prompt([
        {
            name: "answer",
            type: "rawlist",
            message: chalk.cyanBright("\nQ.5) What will this code output?  console.log(''Hello, TypeScript!''); \n"),
            choices: [
                "hello",
                "Typescript",
                "Hello, Typescript!",
                "Error.."
            ]
        }
    ]);
    if (question_5.answer === "Hello, Typescript!") {
        score++;
    }
    let question_6 = await inquirer.prompt([
        {
            name: "answer",
            type: "rawlist",
            message: chalk.cyanBright("\nQ.6) How do you define a number array?\n"),
            choices: [
                "let list: number[];",
                "let list: string[];",
                "let list: any[];",
                "let list: boolean[];"
            ]
        }
    ]);
    if (question_6.answer === "let list: number[];") {
        score++;
    }
    let question_7 = await inquirer.prompt([
        {
            name: "answer",
            type: "rawlist",
            message: chalk.cyanBright("\nQ.7) Which is the correct type for a boolean variable?\n"),
            choices: [
                "string",
                "number",
                "boolean",
                "object"
            ]
        }
    ]);
    if (question_7.answer === "boolean") {
        score++;
    }
    let question_8 = await inquirer.prompt([
        {
            name: "answer",
            type: "rawlist",
            message: chalk.cyanBright("\nQ.8) What is the output of typeof true?\n"),
            choices: [
                "boolean",
                "string",
                "object",
                "number"
            ]
        }
    ]);
    if (question_8.answer === "boolean") {
        score++;
    }
    let question_9 = await inquirer.prompt([
        {
            name: "answer",
            type: "rawlist",
            message: chalk.cyanBright("\nQ.9) What keyword declares a block-scoped variable?\n"),
            choices: [
                "var",
                "let",
                "const",
                "function"
            ]
        }
    ]);
    if (question_9.answer === "let") {
        score++;
    }
    let question_10 = await inquirer.prompt([
        {
            name: "answer",
            type: "rawlist",
            message: chalk.cyanBright("\nQ.10) How do you create an optional property in an interface?\n"),
            choices: [
                "name?: string",
                "name: string?",
                "name: string",
                "name: string!"
            ]
        }
    ]);
    if (question_10.answer === "name?: string") {
        score++;
    }
    let result_consent = await inquirer.prompt([
        {
            name: "user_consent",
            type: "list",
            message: chalk.cyanBright("\nWanna know your final score?\n"),
            choices: ["YES", "NO"]
        }
    ]);
    if (result_consent.user_consent === "YES") {
        if (score === 10) {
            console.log(chalk.greenBright(`Your total score is ${chalk.yellowBright(chalk.magentaBright(score))}/10,Excellent Job!! smarty!`));
        }
        else if (score === 5) {
            console.log(chalk.greenBright(`Your total score is ${chalk.yellowBright(chalk.blueBright(score))}/10,Bruh you're dumb as hell`));
        }
        else if (score < 5) {
            console.log(chalk.greenBright(`Your total score is ${chalk.yellowBright(chalk.redBright(score))}/10,You failed the test :/, How dumb are you??`));
        }
        else if (score === 6) {
            console.log(chalk.greenBright(`your total score is ${chalk.yellowBright(chalk.cyanBright(score))}/10,lol what an embarassing score ngl`));
        }
        else {
            console.log(chalk.greenBright(`your total score is ${chalk.yellowBright(chalk.redBright(score))}/10,mehhh ,could've done better`));
        }
    }
    else {
        console.log(chalk.redBright("Exiting quiz..."));
        process.exit();
    }
}
async function iq_quiz() {
    let score = 0;
    let question_1 = await inquirer.prompt([
        {
            name: "answer",
            type: "rawlist",
            message: chalk.cyanBright("\nQ.1) What comes next in the sequence: 2, 6, 12, 20, 30, ...?\n"),
            choices: [
                "40",
                "42",
                "44",
                "48"
            ]
        }
    ]);
    if (question_1.answer === "42") {
        score++;
    }
    let question_2 = await inquirer.prompt([
        {
            name: "answer",
            type: "rawlist",
            message: chalk.cyanBright("\nQ.2) Find the odd one out: 3, 7, 11, 15, 19, 24\n"),
            choices: [
                "7",
                "11",
                "15",
                "24",
            ]
        }
    ]);
    if (question_2.answer === "24") {
        score++;
    }
    let question_3 = await inquirer.prompt([
        {
            name: "answer",
            type: "rawlist",
            message: chalk.cyanBright("\nQ.3) What is the missing number in the series: 3, 5, 9, 15, 23, ?\n"),
            choices: [
                "30",
                "31",
                "32",
                "33"
            ]
        }
    ]);
    if (question_3.answer === "31") {
        score++;
    }
    let question_4 = await inquirer.prompt([
        {
            name: "answer",
            type: "rawlist",
            message: chalk.cyanBright("\nQ.4) Which of the following is least like the others?\n"),
            choices: [
                "Dog",
                "Cat",
                "lion",
                "Elephant"
            ]
        }
    ]);
    if (question_4.answer === "Elephant") {
        score++;
    }
    let question_5 = await inquirer.prompt([
        {
            name: "answer",
            type: "rawlist",
            message: chalk.cyanBright("\nQ.5) If all Bloops are Razzies and all Razzies are Lazzies, then all Bloops are definitely Lazzies. The statement is:\n"),
            choices: [
                "True",
                "False",
                "Neither",
                "Cannot be determined"
            ]
        }
    ]);
    if (question_5.answer === "True") {
        score++;
    }
    let question_6 = await inquirer.prompt([
        {
            name: "answer",
            type: "rawlist",
            message: chalk.cyanBright("\nQ.6) Find the word that best completes the analogy: Book is to Reading as Fork is to:\n"),
            choices: [
                "Drawing",
                "Writing",
                "Eating",
                "stirring"
            ]
        }
    ]);
    if (question_6.answer === "Eating") {
        score++;
    }
    let question_7 = await inquirer.prompt([
        {
            name: "answer",
            type: "rawlist",
            message: chalk.cyanBright("\nQ.7) If the first two statements are true, is the final statement true? John is taller than Bill. Bill is taller than Dave. John is taller than Dave.\n"),
            choices: [
                "Yes",
                "No",
                "Cannot be determined",
                "Only if John is also older than Dave"
            ]
        }
    ]);
    if (question_7.answer === "Yes") {
        score++;
    }
    let question_8 = await inquirer.prompt([
        {
            name: "answer",
            type: "rawlist",
            message: chalk.cyanBright("\nQ.8) Which number logically follows this series? 4, 9, 16, 25, 36, ?\n"),
            choices: [
                "42",
                "44",
                "49",
                "52"
            ]
        }
    ]);
    if (question_8.answer === "49") {
        score++;
    }
    let question_9 = await inquirer.prompt([
        {
            name: "answer",
            type: "rawlist",
            message: chalk.cyanBright("\nQ.9) If you rearrange the letters 'LNGEDNA' you have the name of a:\n"),
            choices: [
                "Country",
                "City",
                "Animal",
                "Ocean"
            ]
        }
    ]);
    if (question_9.answer === "Country") {
        score++;
    }
    let question_10 = await inquirer.prompt([
        {
            name: "answer",
            type: "rawlist",
            message: chalk.cyanBright("\nQ.10) Which of the following can be arranged into a 5-letter English word?\n"),
            choices: [
                "H, K, P, R, Y",
                "W, O, L, C, N",
                "Q, W, R, G, S",
                "R, E, P, O, T"
            ]
        }
    ]);
    if (question_10.answer === "R, E, P, O, T") {
        score++;
    }
    let result_consent = await inquirer.prompt([
        {
            name: "user_consent",
            type: "list",
            message: chalk.blueBright("\nWanna know your final score?\n"),
            choices: ["YES", "NO"]
        }
    ]);
    if (result_consent.user_consent === "YES") {
        if (score === 10) {
            console.log(chalk.greenBright(`Your total score is ${chalk.yellowBright(score)}/10,your IQ is between 109-120`));
        }
        else if (score === 5) {
            console.log(chalk.greenBright(`Your total score is ${chalk.yellowBright(score)}/10,your iq is between 80-85`));
        }
        else if (score < 5) {
            console.log(chalk.greenBright(`Your total score is ${chalk.yellowBright(score)}/10,are you 'Kid'ing? literally,`));
        }
        else if (score === 6) {
            console.log(chalk.greenBright(`your total score is ${chalk.yellowBright(score)}/10,your IQ is between 90-95`));
        }
        else {
            console.log(chalk.greenBright(`your total score is ${chalk.yellowBright(score)}/10,your IQ is between 95-100`));
        }
    }
    else {
        console.log(chalk.redBright("Exiting quiz..."));
        process.exit();
    }
}
//   MAIN PART TO RUN THE PROGRAM  //
// PROMPTING THE USER TO CHOOSE WHICH QUIZ THEY WANNA USE //
console.log(chalk.magentaBright("\n\t********(QUIZ)********\t"));
let Ask_User = await inquirer.prompt([
    {
        name: "Users_choice",
        type: "list",
        message: chalk.yellowBright("\nChoose which quiz you wanna try from below :\n"),
        choices: ["(1) General Knowledge Quiz", "(2) Typescript Quiz", "(3) IQ test quiz"]
    }
]);
if (Ask_User.Users_choice === "(1) General Knowledge Quiz") {
    general_quiz();
}
else if (Ask_User.Users_choice === "(2) Typescript Quiz") {
    typescript_quiz();
}
else {
    iq_quiz();
}
