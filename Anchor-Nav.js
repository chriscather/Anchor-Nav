$(function() {
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});

$(window).scroll(function() {
	var windscroll = $(window).scrollTop();
	var nextSection = $('.active').next('li').children('a').attr('href');
	if (document.body.scrollHeight - $(this).scrollTop() <= $(this).height()) {
		nextSection = $('#menu li:first-child a').attr('href');
		$('.back-top').addClass('bottom');
		} else {
		$('.back-top').removeClass('bottom');
	}
	
	if (windscroll >= 100) {
		$('section').each(function(i) {
			if ($(this).position().top <= windscroll + 100) {
				$('#menu li.active').removeClass('active');
				$('#menu li').eq(i).addClass('active');
				$('.back-top').attr('href', nextSection);
			}
		});
		} else {
		$('#menu li.active').removeClass('active');
		$('#menu li:first').addClass('active');
		$('.back-top').attr('href', nextSection);
	}
}).scroll();