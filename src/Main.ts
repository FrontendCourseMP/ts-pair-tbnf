class Stack<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  push(element: T): void {
    this.items.push(element);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
}

class BracketValidator {
  private bracketPairs: Map<string, string>;

  constructor() {
    this.bracketPairs = new Map([
      [')', '('],
      [']', '['],
      ['}', '{']
    ]);
  }

  isValid(s: string): boolean {
    const stack = new Stack<string>();

    for (let i = 0; i < s.length; i++) {
      const char = s[i];

      if (char){
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

  private isOpenBracket(char: string): boolean {
    return char === '(' || char === '[' || char === '{';
  }

  private isCloseBracket(char: string): boolean {
    return char === ')' || char === ']' || char === '}';
  }
}

function initializeBracketValidator(): void {
  const formInput = document.getElementById('formInput') as HTMLInputElement;
  const formBtn = document.getElementById('formBtn') as HTMLButtonElement;
  const formOutput = document.getElementById('formOutput') as HTMLInputElement;

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