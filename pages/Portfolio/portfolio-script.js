$(document).ready(function(){
	var portfolioImages = [
		'img/portfolio-img-1.svg',
		'img/portfolio-img-2.svg',
		'img/portfolio-img-3.svg',
		'img/portfolio-img-4.svg',
		'img/portfolio-img-5.svg',
		'img/portfolio-img-6.svg'
	]

	var portfolioDescription = [
		{
			"title" : "Bibendum elit lacus",
			"text" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, aut sint eligendi quae atque, nam non ullam cum tempore laudantium doloremque fugiat ipsam sed magnam. Corporis natus alias magnam consectetur."
		},
		{
			"title" : "Est urna nec",
			"text" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, aut sint eligendi quae atque, nam non ullam cum tempore laudantium doloremque fugiat ipsam sed magnam. Corporis natus alias magnam consectetur."
		},
		{
			"title" : "Dapibus vivamus",
			"text" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, aut sint eligendi quae atque, nam non ullam cum tempore laudantium doloremque fugiat ipsam sed magnam. Corporis natus alias magnam consectetur."
		},
		{
			"title" : "Laoreet metus",
			"text" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, aut sint eligendi quae atque, nam non ullam cum tempore laudantium doloremque fugiat ipsam sed magnam. Corporis natus alias magnam consectetur."
		},
		{
			"title" : "Eros magna posuere",
			"text" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, aut sint eligendi quae atque, nam non ullam cum tempore laudantium doloremque fugiat ipsam sed magnam. Corporis natus alias magnam consectetur."
		},
		{
			"title" : "Metus tincidunt",
			"text" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, aut sint eligendi quae atque, nam non ullam cum tempore laudantium doloremque fugiat ipsam sed magnam. Corporis natus alias magnam consectetur."
		}
	]

	var currPortItem = 0;

	function showPortfolioItem (e){
		$(".portfolio__items-show").addClass("portfolio__items-show-active");
		$("body").addClass("body-no-scroll");
		$(".portfolio__items-show").focus();

		currPortItem = $(this).index();


		$("<img>").appendTo(".portfolio__items-show-photo");
		$(".portfolio__items-show-photo>img").attr("src", portfolioImages[currPortItem]);
		$(".portfolio__items-show-title").html(portfolioDescription[currPortItem].title);
		$(".portfolio__items-show-text").html(portfolioDescription[currPortItem].text);
	}

	function closePortfolio (e){
		$(".portfolio__items-show").removeClass("portfolio__items-show-active");
		$("body").removeClass("body-no-scroll");
		$(".portfolio__items-show-photo>img").remove();
	}

	function portfolioPrev (e){
		if( currPortItem > 0 ){
			$(".portfolio__items-show-photo>img").remove();
			$(".portfolio__items-show-title").html();
			$(".portfolio__items-show-text").html();

			currPortItem--;

			$("<img>").appendTo(".portfolio__items-show-photo");
			$(".portfolio__items-show-photo>img").attr("src", portfolioImages[currPortItem]);
			$(".portfolio__items-show-title").html(portfolioDescription[currPortItem].title);
			$(".portfolio__items-show-text").html(portfolioDescription[currPortItem].text);
		}
	}

	function portfolioNext (e){
		if( currPortItem < 5 ){
			$(".portfolio__items-show-photo>img").remove();
			$(".portfolio__items-show-title").html();
			$(".portfolio__items-show-text").html();

			currPortItem++;

			$("<img>").appendTo(".portfolio__items-show-photo");
			$(".portfolio__items-show-photo>img").attr("src", portfolioImages[currPortItem]);
			$(".portfolio__items-show-title").html(portfolioDescription[currPortItem].title);
			$(".portfolio__items-show-text").html(portfolioDescription[currPortItem].text);
		}
	}

	$(".portfolio__item").on("click", showPortfolioItem);
	$("#portfolio-close").on("click", closePortfolio);
	$("#portfolio-next").on("click", portfolioNext);
	$("#portfolio-prev").on("click", portfolioPrev);

	$(".portfolio__items-show").on('keydown', function(event){
		if( event.key == "ArrowRight" ){
			portfolioNext();
		}
		else if( event.key == "ArrowLeft" ){
			portfolioPrev();
		}
		else if( event.key == "Escape" ){
			closePortfolio();
		}
	})

	$(".portfolio__items-show").swipe({
		swipeStatus:function(event, phase, direction, distance, duration, fingerCount, fingerData, currentDirection)
    {
    	if( direction == "left" && phase == "end" ){
    		portfolioNext();
    	}
    	else if( direction == "right" && phase == "end" ){
    		portfolioPrev();
    	}
 	}
	})
});