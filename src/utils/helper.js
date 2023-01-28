function compareTime(timeString1, timeString2) {
    letdateTime1 = new Date(timeString1);
    letdateTime2 = new Date(timeString2);
    return dateTime.getTime() > dateTime2.getTime();
}

module.exports = {
    compareTime
}