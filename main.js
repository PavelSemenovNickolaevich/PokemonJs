
const $btn = document.getElementById('btn-kick')
const $btnTwo = document.getElementById('btn-punch')


const character = {
    name: 'Picachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
}
// Каждая кнопка наносит удар только по противнику
$btn.addEventListener("click", function () {
    clickButton("Kick", 10, enemy);
});

$btnTwo.addEventListener("click", function () {
    clickButton("Punch", 20, character)
});

function clickButton(info, num, person) {
    console.log(info);
    changeHP(random(num), person);
}

function renderHPLife(person) {
    person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP
}

function renderHP(person) {
    renderHPLife(person);
    renderProgressbarHP(person);
}

function renderProgressbarHP(person) {
    person.elProgressbar.style.width = person.damageHP + '%';

}

function changeHP(count, person) {
    if (person.damageHP < count) {
        person.damageHP = 0;
        alert('Бедный ' + person.name + ' проиграл бой')
        $btn["disabled"] = true;
        $btnTwo["disabled"] = true;
    } else {
        person.damageHP -= count;
        if (person.damageHP < 50) {

        }

    }
    renderHP(person);
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

function init() {
    console.log('Start Game');
    renderHP(character);
    renderHP(enemy);

}

init();

// const firstRow = 'мама мыла раму';
// const secondRow = 'собака друг человека';
// let symbolOne = 0;
// let symbolTwo = 0;
// let char = 'а';

// function getRow(firstRow, secondRow) {
//     for (let i = 0; i < firstRow.length; i++) {
//         if (firstRow.charAt(i) === char) {
//             symbolOne++;
//         }
//     }
//     let b = symbolOne;
//     for (let i = 0; i < secondRow.length; i++) {
//         if (secondRow.charAt(i) === char) {
//             symbolTwo++;
//         }
//     }
//     let c = symbolTwo;
//     if (b > c) {
//         return firstRow;
//     } else {
//         return secondRow;
//     }
// }

// console.log(getRow(firstRow, secondRow))



// //хардкод
// let space =" ";
// let minus = "-"
// function formattedPhone(phone) {
//     for (let i = 0; i < phone.length; i++) {
//         let a = phone.charAt(0);
//         let b = phone.charAt(1);
//         let c = phone.charAt(2);
//         let d = phone.charAt(3);
//         let e = phone.charAt(4);
//         let f = phone.charAt(5);
//         let g = phone.charAt(6);
//         let h = phone.charAt(7);
//         let i = phone.charAt(8);
//         let j = phone.charAt(9);
//         let k = phone.charAt(10);
//         let l = phone.charAt(11);
//         return  a +""+b+space+"("+c+""+d+""+e+")"+" "+f+""+g+""+h+minus+""+i+""+j+minus+""+k+""+l;

//     }
// }

// console.log(formattedPhone('+71234567890'));
// //test

