/*
CIS 124: Introduction to JavaScript
Chapter 4 & 5 Class Exercises
Dominique Tepper, 07NOV2022 */

"use strict";

const today = new Date();

/* FOOTER. Tepper, 06NOV2022 *******************************************/
let footerEl = document.getElementById("footer-el");

function footer() {
    // local variables
    let studentName = "tepper-d, ";
    let whatisToday = today.toDateString() + ".";
    
    const footerStr = studentName + whatisToday;
    footerEl.textContent = footerStr;
}
footer();