alarm = {
    weekendAlarm: "no alarm needed",
    weekdayAlarm: "get up at 7am",
}

let day = "Saturday";
let alarmDisplay = "";

if (day == "Saturday" || day == "Sunday"){
    alarmDisplay = alarm.weekendAlarm;
    } else {
    alarmDisplay = alarm.weekdayAlarm;
};

console.log(alarmDisplay);