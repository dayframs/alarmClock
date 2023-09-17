let a, b, c, d, e, f, g, uHr, uMin, uSec, x;  
let alarm = false; 
let set = false; 

function myFunc(){
    let currentTime = new Date();

    a = hours.innerText;
    b = minutes.innerText;
    c = seconds.innerText;
    
    
    hours.innerText = currentTime.getHours();
    minutes.innerText = currentTime.getMinutes();
    seconds.innerText = currentTime.getSeconds();
    
        if (a==uHr && b==uMin && c==uSec) {
        x = new Audio("mus2.mp3");
        x.play();
            x.loop = true;
        } 
}

myFunc();
setInterval(myFunc, 1000);

function setAlarm() { 
        uHr = userHours.value; 
        uMin = userMinutes.value; 
        uSec = userSeconds.value;

    if (userHours.value > 0 || userMinutes.value > 0 || userSeconds.value > 0)
    {
        set = true;
        alert('Alarm set!');
    } else{alert('Alarm is yet to be set')}
}
function stopAlarm() {
        uHr = userHours.value; 
        uMin = userMinutes.value; 
        uSec = userSeconds.value;
    
        a = hours.innerText;
        b = minutes.innerText;
        c = seconds.innerText;
    if (set) {
        d = Math.floor(Math.random() * 10);
        e = Math.ceil(Math.random() * 10);
        f = d + '+' + e;
        g = prompt(f);
        h = eval(f);
        if (h == g) {
            x.pause();
            alert('Alarm Stopped!');
            userHours.value = '0';
            userMinutes.value = '0';
            userSeconds.value = '0';
            alarm = false;
            set = false;
        }else {
            alert('Try again!');
        }
    } else {
        alert('set your alarm')
    }
}