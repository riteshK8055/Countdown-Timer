const days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById('minutes');
const secs = document.getElementById('secs');

const formatTime = (time) => {

    return time <10? `0${time}`:time;
}

const updateCountDown = (deadline) => {

    const currentTime = new Date();
    const timeDifference = deadline - currentTime;

    //calculate days , hours , mins , secs from timeDiffrence

    let calcSecs = Math.floor(timeDifference/1000)%60;

    let calcMins = Math.floor(timeDifference/1000/60)%60;

    let calcHours = (timeDifference/1000/60/60)%24;

    let calcDays = Math.floor(timeDifference/1000/60/60/24);

    days.textContent = formatTime(calcDays);
    days.textContent = formatTime(calcHours);
    days.textContent = formatTime(calcMins);
    secs.textContent = formatTime(calcSecs);


    
}

const countDown = (targetDate)=> {

    setInterval(updateCountDown(targetDate),1000);

}

const targetDate = new Date("September 1 2023 10:00");
countDown(targetDate);
