const InputElement = document.getElementById('formInput') as HTMLInputElement;
const OutputElement = document.getElementById('formOutput') as HTMLInputElement;

class scobki{
    const strok:string
    const variationSkobOpen = [
        '(',
        '[',
        '{'
    ];
    const variationSkobClose = [
        ')',
        ']',
        '}'
    ];
    constructor(strok: string, age: number) {
        this.strok = strok;
    }

    public function check() {
        let a = []
        
        for (const char of this.strok) {
            if(char in this.variationSkobOpen){
                a.push(char)
            }else if(char in this.variationSkobClose){

            }
        }
    }
}


[{]}