$(document).ready(function(){
	$(".menu a").each(function(index, elemento){
		$(this).css({
			"top":"-200px"
		});
		$(this).animate({"top":"0"}, 2000 + (index*500));
	});
	$("header .textos").css({
		opacity: 0,
		marginTop: 0
	});
	$("header .textos").animate({
		opacity: 1,
		marginTop:"-52px"
	},1500);

	/*$("a").on("click", function(e){
		e.preventDefault();
		$("header .menu").css({
			position: "fixed",
			backgroundColor: "#321",
			height: "50px"
		})
	})*/
/* if($(window).resize())	{$(window).resize(function(){
*/		var windowWidht = $(window).width()
if (windowWidht>800){
	var acercaDe = $("#acercaDe").offset().top,
	menu = $("#platillos").offset().top,
	galeria = $("#galeria").offset().top,
	ubicacion = $("#ubicacion").offset().top;
	$("#btn-acercaDe").on("click", function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop: acercaDe -90
		}, 500);
	});
	$("#btn-menu").on("click", function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop: menu+350
		}, 500);
	});
	$("#btn-galeria").on("click", function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop: galeria-50
		}, 500);
	$("#btn-ubicacion").on("click", function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop: ubicacion
		}, 500);
	});
	});
}
if (windowWidht<800){
	var acercaDe = $("#acercaDe").offset().top,
	menu = $("#platillos").offset().top,
	galeria = $("#galeria").offset().top,
	ubicacion = $("#ubicacion").offset().top;
	$("#btn-acercaDe").on("click", function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop: acercaDe
		}, 500);
	});
	$("#btn-menu").on("click", function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop: menu+50
		}, 500);
	});
	$("#btn-galeria").on("click", function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop: galeria
		}, 500);
	$("#btn-ubicacion").on("click", function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop: ubicacion-40
		}, 500);
	});
	});
}
});
/* };
/* if($(window).resize() == false){
var windowWidht = $(window).width();
if (windowWidht>800){
	var acercaDe = $("#acercaDe").offset().top,
	menu = $("#platillos").offset().top,
	galeria = $("#galeria").offset().top,
	ubicacion = $("#ubicacion").offset().top;
	$("#btn-acercaDe").on("click", function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop: acercaDe -100
		}, 500);
	});
	$("#btn-menu").on("click", function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop: menu+450
		}, 500);
	});
	$("#btn-galeria").on("click", function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop: galeria-50
		}, 500);
	$("#btn-ubicacion").on("click", function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop: ubicacion
		}, 500);
	});
	});
};
if (windowWidht<800){
	var acercaDe = $("#acercaDe").offset().top,
	menu = $("#platillos").offset().top,
	galeria = $("#galeria").offset().top,
	ubicacion = $("#ubicacion").offset().top;

	$("#btn-acercaDe").on("click", function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop: acercaDe
		}, 500);
	});
	$("#btn-menu").on("click", function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop: menu+150
		}, 500);
	});
	$("#btn-galeria").on("click", function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop: galeria
		}, 500);
	$("#btn-ubicacion").on("click", function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop: ubicacion-40
		}, 500);
	});
	});
};
};
});*/ 
