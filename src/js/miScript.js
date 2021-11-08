/*
"use strict"
let summa1;
let summa2;
let summa3;
let summa;
//let site = prompt("Какой вы хотите тип сайта? 1 - интернет представительство (5000р) 2 - информационные услуги (6000р) 3 - веб-сервисы (7000р)");
let site = .addClass('cal1');
if(site == "интернет представительство"){
	summa1 = 5000;
}
if(site == "информационные услуги"){
	summa1 = 6000;
}
if(site == "веб-сервисы"){
	summa1 = 7000;
}
//let design = prompt("Какой вы хотите дизайн сайта? 1 - жесткий (бесплатно) 2 - гибкий (+2000р)");

let design = .addClass('cal2');

if(design == "жёсткий"){
	summa2 = 0;
}
if(design == "гибкий"){
	summa2 = 2000;
}
//let adaptiv = prompt("Какая вам нужна адаптивность сайта? 1 - компьютерная (+1000р) 2 - мобильная (+2000р) 3 - гибрид (+3000р)");

let adaptiv = .addClass('cal3');

if(adaptiv == "компьютерная"){
	summa3 = 1000;
}
if(adaptiv == "мобильная"){
	summa3 = 2000;
}
if(adaptiv == "гибридная"){
	summa3 = 3000;
}

summa = summa1 + summa2 + summa3;

$('.s4').change.val(summa);
*/

	$(document).ready(function() {
  	$('.example').magnificPopup({type:'image'});
});

	$(document).ready(function() {
  	$('.foto1').magnificPopup({type:'image'});
});

	$(document).ready(function() {
  	$('.foto2').magnificPopup({type:'image'});
});

 

$(document).ready(function () {
    var show = true;
    var countbox = ".ns";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.numbers').css('opacity', '1');
            $('.numbers').spincrement({
                thousandSeparator: "",
                duration: 2000
            });
             
            show = false;
        }
    });
 
});

$(document).ready(function () {
setTimeout(function(){
  $.colorbox({
    html:"<h2>Останься и получи скидку 10%</h2>",
    className: "cta",
    width: 350,
    height: 150
  });
}, 10000);
});


/*
alert('Стоимость сайта бдует равна: ' + summa);

console.log(site);
console.log(design);
console.log(adaptiv);


$(document).ready(function(){


$(window).scroll(function(){
	let scrollDistance = $(window).scrollTop();

	$(".section").each((i,el) =>{
		if($(el).offset().top - $(".nav").outerHeight() <= scrollDistance){
			$("nav a").each(i,el) => {
				if ($(el).hasClass("active")){
					$(el).removeClass("active");
				}
			}
			$('nav li:eq('+ i +')').find('a').addClass('active');
		}

	});

});
});

$('a[href^="#"]').click(function(){
	let valHref = $(this).attr("href");
	$('html, body').animate({scrollTop: $(valHref).offset().top - 50 + "px"});
})

change.target.src = change.target.dataset.src

*/