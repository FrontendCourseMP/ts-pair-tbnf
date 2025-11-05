const timeElement = document.getElementById('timeInput');
const lateElement = document.getElementById('timeLate');
const time = parseInt(timeElement.value, 10);
const timeLate = parseInt(lateElement.value, 10);
function arrive(time, timeLate) {
    return time += timeLate;
}
