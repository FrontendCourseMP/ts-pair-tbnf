const timeElement = document.getElementById('timeInput');
const timeElement_2 = document.getElementById('timeInput_2');
const lateElement = document.getElementById('timeLate');
const form = document.getElementById("form");
function arrive(time, timeLate) {
    return time + timeLate;
}
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let time1;
    let time2;
    try {
        time1 = parseInt(timeElement.value, 10);
        time2 = parseInt(timeElement_2.value, 10);
    }
    catch (_a) {
        lateElement.value = "Введите часы";
        return;
    }
    if (isNaN(time1) || isNaN(time2)) {
        lateElement.value = "Введите числа";
        return;
    }
    let result = arrive(time1, time2);
    while (result >= 24) {
        result -= 24;
    }
    lateElement.value = String(result);
});
