const timeFinished = 1554092649000;

const timeUnits = {
    month: 2592000,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1
};

const timeNames = {
    month: ['Monat', 'Monate'],
    day: ['Tag', 'Tage'],
    hour: ['Stunde', 'Stunden'],
    minute: ['Minute', 'Minuten'],
    second: ['Sekunde', 'Sekunden']
};

function countdown() {
    const restTime = timeFinished - new Date().getTime();
    if (restTime < 0) return;
    let d = Math.abs(restTime) / 1000;
    const result = {};
    Object.keys(timeUnits).forEach(key => {
        result[key] = Math.floor(d / timeUnits[key]);
        d -= result[key] * timeUnits[key];
    });
    Object.keys(result).forEach(key => {
        document.getElementById(key).innerText = result[key];
        document.getElementById(key + '-name').innerText = result[key] === 1? timeNames[key][0]:timeNames[key][1];
    })
}

setInterval(countdown, 100);