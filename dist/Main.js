"use strict";
class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
}
class BracketValidator {
    constructor() {
        this.bracketPairs = new Map([
            [')', '('],
            [']', '['],
            ['}', '{']
        ]);
    }
    isValid(s) {
        const stack = new Stack();
        for (let i = 0; i < s.length; i++) {
            const char = s[i];
            if (char) {
                if (this.isOpenBracket(char)) {
                    stack.push(char);
                }
                else if (this.isCloseBracket(char)) {
                    const topElement = stack.isEmpty() ? '#' : stack.pop();
                    if (topElement !== this.bracketPairs.get(char)) {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
        }
        return stack.isEmpty();
    }
    isOpenBracket(char) {
        return char === '(' || char === '[' || char === '{';
    }
    isCloseBracket(char) {
        return char === ')' || char === ']' || char === '}';
    }
}
function initializeBracketValidator() {
    const formInput = document.getElementById('formInput');
    const formBtn = document.getElementById('formBtn');
    const formOutput = document.getElementById('formOutput');
    const validator = new BracketValidator();
    formBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const inputString = formInput.value.trim();
        if (inputString === '') {
            formOutput.value = 'Ошибка: Введите строку со скобками';
            return;
        }
        const validCharsRegex = /^[()\[\]{}]*$/;
        if (!validCharsRegex.test(inputString)) {
            formOutput.value = 'Ошибка: Строка должна содержать только скобки ()[]{}';
            return;
        }
        const isValid = validator.isValid(inputString);
        formOutput.value = isValid ? 'Валидно' : 'Не валидно';
    });
    formInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            formBtn.click();
        }
    });
}
document.addEventListener('DOMContentLoaded', initializeBracketValidator);
//# sourceMappingURL=Main.js.map