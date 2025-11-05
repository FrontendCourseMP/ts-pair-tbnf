const timeElement = document.getElementById('timeInput') as HTMLInputElement;
const lateElement = document.getElementById('timeLate') as HTMLInputElement;

const time: number = parseInt(timeElement.value, 10);
const timeLate: number = parseInt(lateElement.value, 10);

function arrive(time:number,timeLate:number) : number{
    return time+=timeLate
}

