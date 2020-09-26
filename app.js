let clock = document.querySelector('#clock');
document.addEventListener('DOMContentLoaded', realtimeClock);
// DOMContentLoaded means 'when the page loaded'

function realtimeClock() {

    let realtime = new Date();
    let hours = realtime.getHours();
    let minutes = realtime.getMinutes();
    let seconds = realtime.getSeconds();

   let amPm ;

    if (hours < 12) {
        amPm = 'AM';
    } else {
        amPm = 'PM';
        hours = hours - 12;        
    }

    /****************************************************
    // ternary if can also be used 

    let amPm = (hours < 12) ? 'AM' : 'PM';
    hours = (hours > 12) ? hours - 12 : hours;
    ****************************************************/
    
    hours = ('0' + hours).slice(-2);
    minutes = ('0' + minutes).slice(-2);
    seconds = ('0' + seconds).slice(-2);

    clock.innerHTML = `${hours} : ${minutes} : ${seconds} ${amPm}`;

    setTimeout(realtimeClock, 1000);
   
}