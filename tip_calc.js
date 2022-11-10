/*
CIS 124: Introduction to JavaScript
Chapter 4 & 5 Class Exercises

    30% TIP CALCULATOR
        Calculates a 30% tip based on the order total, shows the tip amount, and sums the amount due (total + tip).

Dominique Tepper, 07NOV2022 */

"use strict";

// GLOBAL CONSTANTS. Tepper, 07NOV2022.
const today = new Date();
const percent = .3;
const $ = selector => document.querySelector(selector);
const defaultError = "You order total must be a greater than zero."

// GLOBAL VARIABLES. Tepper, 07NOV2022.
let orderAmt = 0;
let tipAmt = 0;
let totalAmt = 0;
let orderError = "";

/* DATA VALIDATION. 
    Decimal value parsed from user input. Values are reset to defaults if input is invalid.
Tepper, 07NOV2022. */
const validate = () => {
    // block scope variable
    let order = parseFloat($("#order").value);

    if (isNaN(order) || order <= 0) {
        reset();
        orderError = defaultError;
        alert(defaultError);
    }
    else {
        orderAmt = order;
        orderError = "";
    }
}

/* GET AMOUNTS.
    Calculates tip amount and total amount due only if input passes validation.
Tepper, 07NOV2022 */
const getAmts = () => {
    if (orderError == "") {
    tipAmt = orderAmt * percent;
    totalAmt = orderAmt + tipAmt;
    }
}

/* PRINT AMOUNTS
    Retrieved calculated values from getAmts() and outputs to respective text boxes.
Tepper, 07NOV2022 */
const printAmts = () => {
    getAmts();
    $("#tip").value = tipAmt;
    $("#total").value = totalAmt;
    $("#order").focus();
}

/* TIP YOUR BARTENDER
    Executes chained validate, get, and print functions when the Tip Your Bartender button is clicked.
Tepper, 07NOV2022 */
const tip = () => {
    validate();
    printAmts();
}

/* RESET
    Clears text boxes and resets global vars to 0 or "" when the Start Over button is clicked.
Tepper, 07NOV2022.*/
const reset = () => {
    $("#order").value = "";
    $("#tip").value = "";
    $("#total").value = "";
    orderAmt = 0;
    tipAmt = 0;
    totalAmt = 0;
    $("#order").focus();
}

// TIP CALCULATOR EVENT LISTENERS. Tepper, 07NOV2022.
document.addEventListener("DOMContentLoaded", () => {
    $("#tip").addEventListener("click", tip);
    $("#reset").addEventListener("click", reset);
});

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