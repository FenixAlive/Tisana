$(document).ready(function(){
	$(window).scroll(function () {
		var windowWidht = $(window).width();

		if (windowWidht>500) {
			var scroll = $(window).scrollTop();

			$("header .textos").css({
				"transform": "translate(0px,"+scroll/3 +"%)"
			})

			$(".acercaDe article").css({
				"transform": "translate(0px,-"+scroll/5 +"%)"
			})
      $("section .menu").css({
        "transform": 'translate(0px,-'+scroll/120+'%)'
          })
		}
	})
	$(window).resize(function(){
		var windowWidht = $(window).width();
		if (windowWidht<800) {
			$(".acercaDe article").css({
				"transform": "translate(0px,0px)"
			})
		}
	});
})
