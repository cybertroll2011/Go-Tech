$(document).ready(function(){
	// tools
	$(".button").on("mousedown", function(e){
		e.preventDefault();
		$(this).css({
			"transform" : "scale(0.95)"
		});
	});
	$(".button").on("mouseup", function(e){
		e.preventDefault();
		$(this).css({
			"transform" : "scale(1)"
		});
	});

	// header ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ

	$(".header__logo").on("click", function(e){
		e.preventDefault();
		$(window).scrollTop(0);
	})

	$(".nav__link").on("mousedown", function(e){
		$(this).css({
			"color" : "#000"
		});
	});
	$(".nav__link").on("mouseup", function(e){
		$(this).css({
			"color" : "#555555"
		});
	});

	$(".show__nav").on("click", function(e){
		$(this).css({
			"transform" : "translateY(-5px)"
		});
		setTimeout(showNavDef, 200);
		$(".nav").toggleClass("nav-active");
		$("body").toggleClass("body-no-scroll");
	});

	function showNavDef(){
		$(".show__nav").css({
			"transform" : "translateY(0)"
		})
	}

	$(window).scroll(function(e){
		if( $(this).scrollTop() > 400 ){
			headerAddFixed();
		}
		else{
			headerRemoveFixed();
		}
	})

	function headerAddFixed (){
		var headerHeight = $(".header").height();
		$(".header").addClass("header-fixed");
		$(".intro").css({
			"margin-top" : headerHeight + "px"
		});
		$(".top-page-wrapper").css({
			"margin-top" : headerHeight + "px"
		})
	}
	function headerRemoveFixed (){
		$(".header").removeClass("header-fixed");
		$(".intro").css({
			"margin-top" : "0"
		});
		$(".top-page-wrapper").css({
			"margin-top" : "0"
		})
	}

	if( window.pageYOffset > 400 ){
		headerAddFixed();
	}

	// speciality ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ

	var specCarouselCurr = 1;
	var specCarouselNext = 0;
	var specCarouselPrev = 0;

	function specCarouselNextDown (e){
		$(this).css({
			"transform" : "scale(0.9)"
		});
		$(".speciality__carousel-items-wrapper").eq(0).clone().appendTo(".speciality__carousel");

		specCarouselNext += $(".speciality__carousel-items-wrapper").eq(0).width() + 60;
		specCarouselPrev -= $(".speciality__carousel-items-wrapper").eq(0).width() + 60;

		$(".speciality__carousel").css({
			"left" : -specCarouselNext + "px"
		});

		specCarouselCurr++;
	}
	function specCarouselNextUp (e){
		$(this).css({
			"transform" : "scale(1)"
		});
	}

	function specCarouselPrevDown (e){
		$(this).css({
			"transform" : "scale(0.9)"
		});
		if(specCarouselCurr > 1){
			$(".speciality__carousel-items-wrapper").eq(0).remove();

			specCarouselNext -= $(".speciality__carousel-items-wrapper").eq(0).width() + 60;
			specCarouselPrev += $(".speciality__carousel-items-wrapper").eq(0).width() + 60;

			$(".speciality__carousel").css({
				"left" :  specCarouselPrev + "px"
			});

			specCarouselCurr--;
		}
		else{
			$(".speciality__carousel").css({
				"transition" : ".1s",
				"left" : "20px"
			});
			setTimeout(carouselDef, 200);
			function carouselDef (){
				$(".speciality__carousel").css({
					"left" : "0",
					"transition" : ".3s ease-in"
				});
			};
		}
	}
	function specCarouselPrevUp (e){
		$(this).css({
			"transform" : "scale(1)"
		});
	}

	function specCarouselDragStart (event){
		specCarouselBeginOffset = $(".speciality__carousel").css("left");
		specCarouselBeginMouse = event.pageX;
	};
	function specCarouselDragEnd (event){
		specCarouselEndMouse = event.pageX;

		if(specCarouselBeginMouse > specCarouselEndMouse){
			specCarouselNextDown();
			specCarouselNextUp();
		}
		else if(specCarouselBeginMouse < specCarouselEndMouse){
			specCarouselPrevDown();
			specCarouselPrevUp();
		}
	};

	$("#speciality__carousel-next").on("mousedown", specCarouselNextDown);
	$("#speciality__carousel-next").on("mouseup", specCarouselNextUp);

	$("#speciality__carousel-prev").on("mousedown", specCarouselPrevDown);
	$("#speciality__carousel-prev").on("mouseup", specCarouselPrevUp);

	$(".speciality__carousel").on("mousedown", specCarouselDragStart);
	$(".speciality__carousel").on("mouseup", specCarouselDragEnd);

	$(".speciality__carousel-item").swipe({
		swipeStatus:function(event, phase, direction, distance, duration, fingerCount, fingerData, currentDirection)
    {
    	if( direction == "left" && phase == "end" ){
    		specCarouselNextDown();
    		specCarouselNextUp();
    	}
    	else if( direction == "right" && phase == "end" ){
    		specCarouselPrevDown();
    		specCarouselPrevUp();
    	}
 	}
	})


	// testimonials ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ

	var testimonials = $(".testimonial__item");

	function testimNext (){
		var currTestim = $(".testimonial__item-active");
		var nextTestim = currTestim.index()+1;

		if( currTestim.index() < testimonials.length-1 ){
			testimonials.removeClass("testimonial__item-active");
			testimonials.eq(nextTestim).addClass("testimonial__item-active");	
		}

		scaleShowTestimItem();
		hideTextTestim();
	}

	function testimPrev (){
		var currTestim = $(".testimonial__item-active");
		var prevTestim = currTestim.index()-1;

		if( currTestim.index() > 0 ){
			testimonials.removeClass("testimonial__item-active");
			testimonials.eq(prevTestim).addClass("testimonial__item-active");
		}

		scaleShowTestimItem();
		hideTextTestim();
	}

	function showTestim (e){
		$(this).css({
			"transform" : "scale(.8)"
		})
		var testimPhoto = $(this).parent();
		var testimPhotoAttr = testimPhoto.attr("data-testimonial");

		$(".testimonial__item-active").removeClass("testimonial__item-active");

		for( let i = 0; i < testimonials.length; i++){
			var testimAttr = testimonials.eq(i).attr("data-testimonial");
			if( testimAttr == testimPhotoAttr ){
				testimonials.eq(i).addClass("testimonial__item-active");
			}
		}
	}

	function showTestimUp (){
		$(this).css({
			"transform" : "scale(1)"
		})
	}

	function showTextTestim (){
		$(".testimonial-short").css("display", "none");
		$(".testimonial-full").css("display", "block");
	}

	function hideTextTestim (){
		$(".testimonial-short").css("display", "block");
		$(".testimonial-full").css("display", "none");
	}

	function scaleShowTestimItem (){
		var testimAttr = $(".testimonial__item-active").attr("data-testimonial");
		var showTestimItem = $(".show__testimonial");
		
		for( let i = 0; i < showTestimItem.length; i++){
			var showTestimItemAttr = showTestimItem.eq(i).attr("data-testimonial");
			
			if( showTestimItemAttr == testimAttr ){
				showTestimItem.eq(i).children().css({
					"transform" : "scale(0.7)"
				});
				setTimeout(scaleZero, 200);
				function scaleZero(){
					showTestimItem.eq(i).children().css({
						"transform" : "scale(1)"
					});
				}
			}
		}
	}

	$("#testimonials-next").on("click", testimNext);
	$("#testimonials-prev").on("click", testimPrev);
	$(".show__testimonial>img").on("mousedown", showTestim);
	$(".show__testimonial>img").on("mouseup", showTestimUp);
	$(".testimonial__item-text").on("click", showTextTestim);

	// contact us
	
	$("#move-to-contact-form").on("click", function(){
		var offset = $(".contact-us").offset().top;
		$(window).scrollTop(offset);
	})

});