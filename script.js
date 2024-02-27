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
