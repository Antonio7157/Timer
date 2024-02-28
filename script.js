setInterval(function() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const hoursElement = document.getElementById("hours");
    hoursElement.innerHTML = hours; 
    const minutesElement = document.getElementById("minutes");
    minutesElement.innerHTML = minutes; 
    const secondsElement = document.getElementById("seconds");
    secondsElement.innerHTML = seconds; 

    
    const session = document.getElementById("session");
    if (hours < 12) {
        session.innerHTML = "AM";
    } else {
        session.innerHTML = "PM";
    }
}, 1000);

let hoursTimer = 0;
let minutesTimer = 0;
let secondsTimer = 0;
let timerInterval;

function startTimer() {
    hoursTimer = parseInt(document.getElementById("hours-input").value) || 0;
    minutesTimer = parseInt(document.getElementById("minutes-input").value) || 0;
    secondsTimer = parseInt(document.getElementById("seconds-input").value) || 0;
    

    if (hoursTimer < 0 || hoursTimer > 23 || minutesTimer < 0 || minutesTimer > 59 || secondsTimer < 0 || secondsTimer > 59) {
        alert("Invalid time input!");
        return;
    }
}
 
