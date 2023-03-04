let monday = document.getElementById("monday-hours");
let tuesday = document.getElementById("tuesday-hours");
let wednesday = document.getElementById("wednesday-hours");
let thursday = document.getElementById("thursday-hours");
let friday = document.getElementById("friday-hours");
let saturday = document.getElementById("saturday-hours");
let sunday = document.getElementById("sunday-hours");

function mondayPay() {
    let result = monday * weekday_pay;
    return result;
    //document.getElementById"mon-pay".innerHTML = result;
}

function tuesdayPay() {
    let result = tuesday * weekday_pay;
    return result;
}

function wednesdayPay() {
    let result = wednesday * weekday_pay;
    return result;
}

function thursdayPay() {
    let result = thursday * weekday_pay;
    return result;
}

function fridayPay() {
    let result = friday * weekday_pay;
    return result;
}

function satudayPay() {
    let result = saturday * saturday_pay;
    return result;
}

function sundayPay() {
    let result = sunday * sunday_pay;
    return result;
}




