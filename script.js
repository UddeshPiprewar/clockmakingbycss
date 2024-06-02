const secondhand = document.getElementById('sec');
const minhand = document.getElementById('min');
const hourhand = document.getElementById('hour');

function clock(){
    const date = new Date();
    const seconds = date.getSeconds() / 60;
    const minutes = (seconds + date.getMinutes()) / 60;
    const hours = (minutes + date.getHours()) / 12;

    rotateClockHand(secondhand, seconds);
    rotateClockHand(minhand, minutes);
    rotateClockHand(hourhand, hours);
}

function rotateClockHand(element, rotation){
    element.style.setProperty('--rotate', rotation * 360);
}
setInterval(clock, 1000);
