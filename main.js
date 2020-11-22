const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';
let symbolOne = 0;
let symbolTwo = 0;
let char = 'а';

function getRow(firstRow, secondRow) {
    for (let i = 0; i < firstRow.length; i++) {
        if (firstRow.charAt(i) === char) {
            symbolOne++;
        }
    }
    let b = symbolOne;
    for (let i = 0; i < secondRow.length; i++) {
        if (secondRow.charAt(i) === char) {
            symbolTwo++;
        }
    }
    let c = symbolTwo;
    if (b > c) {
        return firstRow;
    } else {
        return secondRow;
    }
}

console.log(getRow(firstRow, secondRow))



//хардкод
let space =" ";
let minus = "-"
function formattedPhone(phone) {
    for (let i = 0; i < phone.length; i++) {
        let a = phone.charAt(0);
        let b = phone.charAt(1);
        let c = phone.charAt(2);
        let d = phone.charAt(3);
        let e = phone.charAt(4);
        let f = phone.charAt(5);
        let g = phone.charAt(6);
        let h = phone.charAt(7);
        let i = phone.charAt(8);
        let j = phone.charAt(9);
        let k = phone.charAt(10);
        let l = phone.charAt(11);
        return  a +""+b+space+"("+c+""+d+""+e+")"+" "+f+""+g+""+h+minus+""+i+""+j+minus+""+k+""+l;

    }
}

console.log(formattedPhone('+71234567890'));
//test