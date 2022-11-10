/* CIS 124: Introduction to JavaScript
Chapter 4 & 5 Class Exercises

    20 BOTTLES OF BEER ON THE WALL
    Takes integer input and does a reverse count of bottles left until count = 0.
Dominique Tepper, 07NOV2022 */

"use strict";

// GLOBAL CONSTANTS. Tepper, 07NOV2022.
const today = new Date();

// GLOBAL VARIABLES. Tepper, 07NOV2022.
let bottles = 0;
let printBottle = "";

// DATA VALIDATION. Tepper, 10NOV2022.
const getNum = () => {
    let userNum = parseInt(prompt("Enter a number between 1 -20:"));

    while (isNaN(userNum) || userNum < 0 || userNum > 20) {
        userNum = parseInt(prompt("Enter a number between 1 - 20:"));
    }

    bottles = userNum;
}

// BOTTLE COUNT LOOP. Tepper, 10NOV2022.
const bottlePrint = () => {
    let bottleMsg1 = " bottles of beer on the wall. "
    let bottleMsg2 = " bottles of beer. Take one down, pass it around, "

    let bottleMsg3 = " bottle of beer on the wall. "
    let bottleMsg4 = " bottle of beer. Take one down, pass it around, "
    
    for (let i = bottles; i > -1; i--) {

        if (i == 0 ) {
            console.log("Goodbye!")
        }
        else if (i == 1) {
            printBottle = i + bottleMsg3 + i + bottleMsg4 + "umm... we're out of beer.";
            console.log (printBottle);
        }
        else {
            printBottle = i + bottleMsg1 + i + bottleMsg2 + (i-1) + bottleMsg1;
            console.log (printBottle);
        }
    }
}

// CHAINED FUNCTIONS. Tepper, 10NOV2022.
const sing = () => {
getNum();
bottlePrint();
}
sing();

/* FOOTER. Tepper, 06NOV2022 *******************************************/
let footerEl = document.getElementById("footer-el");

function footer() {
    // block scope variables
    let studentName = "tepper-d, ";
    let whatisToday = today.toDateString() + ".";
    
    const footerStr = studentName + whatisToday;
    footerEl.textContent = footerStr;
}
footer();