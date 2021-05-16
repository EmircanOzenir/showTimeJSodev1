let userName = prompt("Adınız Nedir?");

document.getElementById("myName").innerHTML = userName;

let daydate = new Date();
let weekdays = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
let days = weekdays[daydate.getDay()];
document.getElementById("todaysday").innerHTML = "Bugün günlerden: " + days;

function showTime() {

    let daty = new Date();
    let hours = daty.getHours();
    let mins = daty.getMinutes();
    let secs = daty.getSeconds();
    hours = hours < 10 ? "0" + hours : hours;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;

    let exactTime = hours + " : " + mins + " : " + secs;

    document.getElementById("myClock").innerHTML = exactTime;
    setTimeout(showTime, 1000);
}

showTime();