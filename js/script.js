let clockH = document.querySelector('.clock__hours');
let clockM = document.querySelector('.clock__minutes');
let clockS = document.querySelector('.clock__seconds');

let startClock = () => {
    updateTime();
    setInterval(updateTime, 1000);
}

let updateTime = () => {
    let now = new Date();
    let hours = now.getHours() % 12;
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    clockH.style.transform = `rotate(${360 / 12 * hours}deg)`;
    clockM.style.transform = `rotate(${360 / 60 * minutes}deg)`;
    clockS.style.transform = `rotate(${360 / 60 * seconds}deg)`;
}

startClock();