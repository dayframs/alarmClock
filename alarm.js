let a, b, c, uHr, uMin, uSec, x;    

function myFunc(){
    let currentTime = new Date();

    a = hours.innerText;
    b = minutes.innerText;
    c = seconds.innerText;
    
    hours.innerText = currentTime.getHours();
    minutes.innerText = currentTime.getMinutes();
    seconds.innerText = currentTime.getSeconds();
    if (a==uHr && b==uMin && c==uSec) {
        x = new Audio("./mus2.mp3");
        x.play();
    }
}

myFunc();
setInterval(myFunc, 1000);

function setAlarm() { 
    uHr = userHours.value; 
    uMin = userMinutes.value; 
    uSec = userSeconds.value;
}
function stopAlarm() {
    x.pause();
}