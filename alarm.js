let a, b, c, uHr, uMin, uSec;    

function myFunc(){
    let currentTime = new Date();

    a = hours.innerText;
    b = minutes.innerText;
    c = seconds.innerText;
    
    hours.innerText = currentTime.getHours();
    minutes.innerText = currentTime.getMinutes();
    seconds.innerText = currentTime.getSeconds();
    if (a==uHr && b==uMin && c==uSec) {
        console.log('wake up');
    }
}
myFunc();
setInterval(myFunc, 1000);

function setAlarm() { 
    uHr = userhours.value; 
    uMin = userminutes.value; 
    uSec = userseconds.value;
}
function stopAlarm() {
    
}