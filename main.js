function $getElById(id) {
    return document.getElementById(id);
}

const $btn = $getElById('btn-kick');
const $btnTwo = $getElById('btn-punch');


const character = {
    name: 'Picachu',
    defaultHP: 200,
    damageHP: 200,
    elHP: $getElById('health-character'),
    elProgressbar: $getElById('progressbar-character'),
    renderHP: renderHP,
    changeHP: changeHP,
    renderHPLife: renderHPLife,
    renderProgressbarHP: renderProgressbarHP,
}

const enemy = {
    name: 'Charmander',
    defaultHP: 200,
    damageHP: 200,
    elHP: $getElById('health-enemy'),
    elProgressbar: $getElById('progressbar-enemy'),
    renderHP: renderHP,
    changeHP: changeHP,
    renderHPLife: renderHPLife,
    renderProgressbarHP: renderProgressbarHP,
}
const {name: nameOfCharacter, changeHP: damageHPCharacter, defaultHP: fullHPCharacter} = character;
const {name: nameOfEnemy, changeHP: damageHPEnemy, defaultHP: fullHPEnemy} = enemy;


// Каждая кнопка наносит удар только по противнику
let c = $btn.addEventListener("click", function () {
    console.log('kick');
    enemy.changeHP(random(20));
});

$btnTwo.addEventListener("click", function () {
    console.log('punch');
    character.changeHP(random(20));
});

function renderHP() {
    this.renderHPLife();
    this.renderProgressbarHP();
}

function renderHPLife(person) {
    this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
}

function renderProgressbarHP(person) {
    this.elProgressbar.style.width = (this.damageHP / this.defaultHP) * 100 + '%';


}


function changeHP(count) {
    this.damageHP -= count;
    const log = this === character ? generateLog(nameOfCharacter
        , nameOfEnemy, count, this.damageHP, fullHPCharacter) : generateLog(nameOfEnemy, nameOfCharacter, count, this.damageHP, fullHPEnemy);
    console.log(generateLog(log));
    const $p = document.createElement('p');
    const $logs = document.querySelector('#logs');
    $p.innerText = generateLog(log);
    $logs.insertBefore($p, $logs.children[0])
    if (this.damageHP <= 0) {
        this.damageHP = 0;
        alert('Бедный ' + this.name + ' проиграл бой')
        $btn["disabled"] = true;
        $btnTwo["disabled"] = true;
    }
    this.renderHP();
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

function generateLog(firstPerson, secondPerson, damage, damageHP, fullHp) {
    const logs = [
        `${firstPerson} вспомнил что-то важное, но неожиданно ${secondPerson}, не помня себя от испуга, ударил в предплечье врага. Урон: ${damage}. Всего осталось здоровья ${damageHP}/${fullHp}`,
        `${firstPerson} поперхнулся, и за это ${secondPerson} с испугу приложил прямой удар коленом в лоб врага. Урон: ${damage}. Всего осталось здоровья ${damageHP}/${fullHp}`,
        `${firstPerson} забылся, но в это время наглый ${secondPerson}, приняв волевое решение, неслышно подойдя сзади, ударил. Урон: ${damage}. Всего осталось здоровья ${damageHP}/${fullHp}`,
        `${firstPerson} пришел в себя, но неожиданно ${secondPerson} случайно нанес мощнейший удар. Урон: ${damage}. Всего осталось здоровья ${damageHP}/${fullHp}`,
        `${firstPerson} поперхнулся, но в это время ${secondPerson} нехотя раздробил кулаком \<вырезанно цензурой\> противника. Урон: ${damage}. Всего осталось здоровья ${damageHP}/${fullHp}`,
        `${firstPerson} удивился, а ${secondPerson} пошатнувшись влепил подлый удар. Урон: ${damage}. Всего осталось здоровья ${damageHP}/${fullHp}`,
        `${firstPerson} высморкался, но неожиданно ${secondPerson} провел дробящий удар. Урон: ${damage}. Всего осталось здоровья ${damageHP}/${fullHp}`,
        `${firstPerson} пошатнулся, и внезапно наглый ${secondPerson} беспричинно ударил в ногу противника Урон: ${damage}. Всего осталось здоровья ${damageHP}/${fullHp}`,
        `${firstPerson} расстроился, как вдруг, неожиданно ${secondPerson} случайно влепил стопой в живот соперника. Урон: ${damage}. Всего осталось здоровья ${damageHP}/${fullHp}`,
        `${firstPerson} пытался что-то сказать, но вдруг, неожиданно ${secondPerson} со скуки, разбил бровь сопернику. Урон: ${damage}. Всего осталось здоровья ${damageHP}/${fullHp}`
    ];

    return logs[random(logs.length) - 1]
}

function init() {
    console.log('Start Game');
    character.renderHP();
    enemy.renderHP();
}

init();