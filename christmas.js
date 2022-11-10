/*CIS 124: Introduction to JavaScript
Chapter 4 & 5 Class Exercises

    "TWELVE DAYS OF CHRISTMAS" VARIATIONS
        Receives user input from 1 to 12 and prints the lyrics as a countdown.
        Reference: https://en.wikipedia.org/wiki/The_Twelve_Days_of_Christmas_(song)#Sweden
Dominique Tepper, 07NOV2022 */

"use strict";

// GLOBAL CONSTANTS. Tepper, 07NOV2022.
const today = new Date();

const itemsSV = ["One hen.", "Two barley seeds.", "Three grey geese.", "Four pounds of pork.", "Five flayed sheep.", "A sow with six pigs.", "Seven åtting grain.", "Eight grey foals with golden saddles.", "Nine newly born cows.", "Ten pairs of oxen.", "Eleven clocks.", "Twelve churches, with twelve altars, each with twelve priests, each with twelve capes, each with twelve coin-purses, each with twelve daler inside."];

// GLOBAL VARIABLES. Tepper, 07NOV2022.
let days = 0;
let daysIndex = 0;

/* GLOBAL HTML ELEMENTS. 
    Workaround to printing one line per item so output is displayed like a list, not as a paragraph of items.
Tepper, 10NOV2022.*/
let day12El = document.getElementById("day12-el");
let day11El = document.getElementById("day11-el");
let day10El = document.getElementById("day10-el");
let day9El = document.getElementById("day9-el");
let day8El = document.getElementById("day8-el");
let day7El = document.getElementById("day7-el");
let day6El = document.getElementById("day6-el");
let day5El = document.getElementById("day5-el");
let day4El = document.getElementById("day4-el");
let day3El = document.getElementById("day3-el");
let day2El = document.getElementById("day2-el");
let day1El = document.getElementById("day1-el");
let day0El = document.getElementById("day0-el");


// DATA VALIDATION. Tepper, 10NOV2022.
const daysValidate = () => {
    let userNum = parseInt(prompt("How many days 'til Christmas? (1 - 12)"));

    // prompt will loop until user inputs a valid integer
    while (isNaN(userNum) || userNum < 0 || userNum >= 13) {
        userNum = parseInt(prompt("How many days 'til Christmas? (1 - 12)"));
    }
    
    // if input is valid, input value is assigned to var days
    days = userNum;
}


/* CATALOGING. 
    Assigns index element to HTML element based on index value.
Tepper, 10NOV2022.*/
const printSV = () => {
    if (daysIndex == 11) {
        day12El.textContent = itemsSV[11];
    }
    else if (daysIndex == 10) {
        day11El.textContent = itemsSV[10];
    }
    else if (daysIndex == 9) {
        day10El.textContent = itemsSV[9];
    }
    else if (daysIndex == 8) {
        day9El.textContent = itemsSV[8];
    }
    else if (daysIndex == 7) {
        day8El.textContent = itemsSV[7];
    }
    else if (daysIndex == 6) {
        day7El.textContent = itemsSV[6];
    }
    else if (daysIndex == 5) {
        day6El.textContent = itemsSV[5];
    }
    else if (daysIndex == 4) {
        day5El.textContent = itemsSV[4];
    }
    else if (daysIndex == 3) {
        day4El.textContent = itemsSV[3];
    }
    else if (daysIndex == 2) {
        day3El.textContent = itemsSV[2];
    }
    else if (daysIndex == 1) {
        day2El.textContent = itemsSV[1];
    }
    else if (daysIndex == 0) {
        day1El.textContent = itemsSV[0];
    }
}

// INDEXER LOOP. Tepper, 10NOV2022.
const countSV = () => {
    daysIndex = days - 1;

    while (daysIndex >= 0) {
        printSV()
        daysIndex--;
    }
}


// COUNTDOWN EXECUTE. Tepper, 10NOV2022.
const letItSnow = () => {
    daysValidate();
    countSV();
}
letItSnow();


/* FOOTER. Tepper, 06NOV2022 *******************************************/
let footerEl = document.getElementById("footer-el");

function footer() {
    // block variables
    let studentName = "tepper-d, ";
    let whatisToday = today.toDateString() + ".";
    
    const footerStr = studentName + whatisToday;
    footerEl.textContent = footerStr;
}
footer();
