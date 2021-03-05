$(document).ready(function () {
	$('.burger').click(function (event) {
		$(this).toggleClass('active');
		$('.menu__body').toggleClass('active');
		$('body').toggleClass('lock');
	});
});