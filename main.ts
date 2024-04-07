#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgCyanBright.bold("\n\n\t\t************** CURRENCY CONVERTER **************\n\n\t\t"));


const currency : any = {
    USD: "1", // base amount
    EUR: "0.92", 
    GBP: "0.79",
    INR: "83.30",
    PKR: "277.54",
    RMB: "7.23",
    DIN: "1308.17",
    AED: "3.67",
    SAR: "3.75"
}

let userAns = await inquirer.prompt(
  [
     {
        name: "from",
        message: (chalk.magentaBright.bold ("Select your currency which you want to convert \n " )),
        type: "list",
        prefix: "",
        choices: ["USD","EUR","GBP","INR","PKR","RMB","DIN","AED","SAR"]
     },

     {
        name: "to",
        message: (chalk.magentaBright.bold("Select your currency in which you want to convert \n")),
        type: "list",
        prefix: "",
        choices:  ["USD","EUR","GBP","INR","PKR","RMB","DIN","AED","SAR"]
     },

     {
        name: "amount",
        message: (chalk.blueBright.bold("How much amount you want to convert? \n")),
        type: "number",
        prefix: "",
     }
  ]    
)
// Dynamic method line no. 39 and 40

let fromAmount = currency[userAns.from] // Exchange rate
let toAmount = currency[userAns.to] // Exchange rate
let amount = userAns.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount
let result = (chalk.yellow(Math.round(convertedAmount)))

console.log(chalk.greenBright(`Your conversion from ${fromAmount} to ${toAmount} is ${result}`));

