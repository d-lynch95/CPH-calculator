//function to calculate daily pay by inputting hours worked and
// multiply them by different daily rates

let monday = document.getElementById("monday-hours");
let tuesday = document.getElementById("tuesday-hours");
let wednesday = document.getElementById("wednesday-hours");
let thursday = document.getElementById("thursday-hours");
let friday = document.getElementById("friday-hours");
let saturday = document.getElementById("saturday-hours");
let sunday = document.getElementById("sunday-hours");

function mondayPay() {
    let result = monday.value * weekday_pay;
    return document.getElementById("mon-pay").innerHTML = result.toFixed(2);
}

function tuesdayPay() {
    let result = tuesday.value * weekday_pay;
    return document.getElementById("tue-pay").innerHTML = result.toFixed(2);
}

function wednesdayPay() {
    let result = wednesday.value * weekday_pay;
    return document.getElementById("wed-pay").innerHTML = result.toFixed(2);
}

function thursdayPay() {
    let result = thursday.value * weekday_pay;
    return document.getElementById("thur-pay").innerHTML = result.toFixed(2);
}

function fridayPay() {
    let result = friday.value * weekday_pay;
    return document.getElementById("fri-pay").innerHTML = result.toFixed(2);
}

function saturdayPay() {
    let result = saturday.value * saturday_pay;
    return document.getElementById("sat-pay").innerHTML = result.toFixed(2);
}

function sundayPay() {
    let result = sunday.value * sunday_pay;
    return document.getElementById("sun-pay").innerHTML = result.toFixed(2);
}

// function to calculate total wage
let monday_pay = document.getElementById("mon-pay");
let tuesday_pay = document.getElementById("tue-pay");
let wednesday_pay = document.getElementById("wed-pay");
let thursday_pay = document.getElementById("thur-pay");
let friday_pay = document.getElementById("fri-pay");
let weekend1_pay = document.getElementById("sat-pay");
let weekend2_pay = document.getElementById("sun-pay");

// Neeed to look at this function to get it to work
function totalPay() {
    let result = monday_pay + tuesday_pay + wednesday_pay + thursday_pay + friday_pay
    + weekend1_pay + weekend2_pay;
    return document.getElementById("totalspan").innerHTML = result;
}

 //function to calculate tax due per week
 function TaxDue() {

 }

// function to look at hours worked during the week ??????
function HoursWorked() {
    let result = parseFloat(monday.value) + parseFloat(tuesday.value) + parseFloat(wednesday.value) 
    + parseFloat(thursday.value) + parseFloat(friday.value) + parseFloat(saturday.value) 
    + parseFloat(sunday.value);
    return document.getElementById("t-h-w").innerHTML = result;
}


// function to calculate total commission earned
let totalCommission = document.getElementById("number");

function totalCommissionEarned() {
    let result = totalCommission.value;
    return document.getElementById("t-c-e").innerText = result;
}

// function to calculate the amount of commission earned per hour
let totalHours = document.getElementById("t-h-w");


// Need to fix this function????
function cphCalculate() {
    let result = parseFloat(totalCommission.value) / parseFloat(totalHours.innerText);
    return document.getElementById("commissionPerHour").innerText = result;
}
