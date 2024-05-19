$(function () {
	$('.logo, .header__link, .wrapper__link').on('click', function (event) {
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id = $(this).attr('href'),
			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;

		$('body,html').animate({ scrollTop: top }, 1500);
	});

	$('.burger, .logo').on('click', function () {
		$('.header__list').toggleClass('header__list--active');
		$('.burger').toggleClass('burger--active');
		$('body').toggleClass('lock');
	});
});

var mixer = mixitup('.works__list', {
	animation: {
		duration: 500,
	},
});
