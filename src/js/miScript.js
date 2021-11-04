"use strict"
let summa1;
let summa2;
let summa3;
let summa;
let site = prompt("Какой вы хотите тип сайта? 1 - интернет представительство (5000р) 2 - информационные услуги (6000р) 3 - веб-сервисы (7000р)");
if(site == 1){
	summa1 = 5000;
}
if(site == 2){
	summa1 = 6000;
}
if(site == 3){
	summa1 = 7000;
}
let design = prompt("Какой вы хотите дизайн сайта? 1 - жесткий (бесплатно) 2 - гибкий (+2000р)");
if(design == 1){
	summa2 = 0;
}
if(design == 2){
	summa2 = 2000;
}
let adaptiv = prompt("Какая вам нужна адаптивность сайта? 1 - компьютерная (+1000р) 2 - мобильная (+2000р) 3 - гибрид (+3000р)");
if(adaptiv == 1){
	summa3 = 1000;
}
if(adaptiv == 2){
	summa3 = 2000;
}
if(adaptiv == 3){
	summa3 = 3000;
}

summa = summa1 + summa2 + summa3;

alert('Стоимость сайта бдует равна: ' + summa);

console.log(site);
console.log(design);
console.log(adaptiv);