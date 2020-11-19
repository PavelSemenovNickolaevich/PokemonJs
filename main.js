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