const timeElement = document.getElementById('timeInput') as HTMLInputElement;
const lateElement = document.getElementById('timeLate') as HTMLInputElement;

const time: number = parseInt(timeElement.value, 10);
const timeLate: number = parseInt(lateElement.value, 10);

function arrive(time:number,timeLate:number) : number{
    return time+=timeLate
}

let formInput: HTMLInputElement = document.getElementById('input') as HTMLInputElement;
let formOtput: HTMLInputElement = document.getElementById('output') as HTMLInputElement;

formInput.addEventListener('input', setNumber(){
    const input.Value: number = parseInt(formInput.value);
    const FinalTime: number = arrive(InputValue);
    formOutput.value = result.toString()
});


