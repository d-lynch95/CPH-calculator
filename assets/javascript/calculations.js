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


let monday_pay = document.getElementById("mon-pay").innerText;
let tuesday_pay = document.getElementById("tue-pay").innerText;
let wednesday_pay = document.getElementById("wed-pay").innerText;
let thursday_pay = document.getElementById("thur-pay").innerText;
let friday_pay = document.getElementById("fri-pay").innerText;
let weekend1_pay = document.getElementById("sat-pay").innerText;
let weekend2_pay = document.getElementById("sun-pay").innerText;

// Neeed to look at this function to get it to work
function totalPay() {
    let result = monday_pay + tuesday_pay + wednesday_pay 
    + thursday_pay + friday_pay + weekend1_pay + weekend2_pay;
     return document.getElementById("totalspan").innerHTML = result;
 }


function HoursWorked() {
    let result = parseFloat(monday.value) + parseFloat(tuesday.value) + parseFloat(wednesday.value) 
    + parseFloat(thursday.value) + parseFloat(friday.value) + parseFloat(saturday.value) 
    + parseFloat(sunday.value);
    return document.getElementById("t-h-w").innerHTML = result;

}


