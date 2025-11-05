const timeElement = document.getElementById('timeInput') as HTMLInputElement;
const timeElement_2 = document.getElementById('timeInput_2') as HTMLInputElement;
const lateElement = document.getElementById('timeLate') as HTMLInputElement;
const form = document.getElementById("form") as HTMLFormElement;

function arrive(time: number, timeLate: number): number {
    return time + timeLate;
}

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    
    let time1: number;
    let time2: number;
    
    try {
        time1 = parseInt(timeElement.value, 10);
        time2 = parseInt(timeElement_2.value, 10);
    } catch {
        lateElement.value = "Введите часы";
        return;
    }
    
    if (isNaN(time1) || isNaN(time2)) {
        lateElement.value = "Введите числа";
        return;
    }
    
    let result: number = arrive(time1, time2);
    while (result >= 24) {
        result -= 24;
    }
    
    lateElement.value = String(result);
});