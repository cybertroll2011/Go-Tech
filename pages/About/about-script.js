$(document).ready(function(){

	var galleryImages = [
		'img/gallery/gallery-item-1.jpg',
		'img/gallery/gallery-item-2.jpg',
		'img/gallery/gallery-item-3.jpg',
		'img/gallery/gallery-item-4.jpg',
		'img/gallery/gallery-item-5.jpg',
		'img/gallery/gallery-item-6.jpg',
		'img/gallery/gallery-item-7.jpg',
		'img/gallery/gallery-item-8.jpg'
	]
		
	var galleryCurrImg = 1;

	function openGallery (e){
		$(".gallery-opened").addClass("gallery-opened-active");
		$("body").addClass("body-no-scroll");
		$(".gallery-opened").focus();

		var itemAttr = $(this).attr("data-gallery")
		galleryCurrImg = itemAttr;

		$("<img>").appendTo(".gallery-opened-photo");
		$(".gallery-opened-photo>img").attr("src", galleryImages[galleryCurrImg-1]);
	}

	function closeGallery (e){
		$(".gallery-opened").removeClass("gallery-opened-active");
		$("body").removeClass("body-no-scroll");
		$(".gallery-opened-photo>img").remove();
	}

	function galleryPrev (e){
		if( galleryCurrImg > 1){
			$(".gallery-opened-photo>img").remove();
			$(".gallery-opened-description-title").html();
			$(".gallery-opened-description-text").html();

			galleryCurrImg--;

			$("<img>").appendTo(".gallery-opened-photo");
			$(".gallery-opened-photo>img").attr("src", galleryImages[galleryCurrImg-1]);
		}
	}

	function galleryNext (e){
		if( galleryCurrImg < galleryImages.length){
			$(".gallery-opened-photo>img").remove();
			$(".gallery-opened-description-title").html();
			$(".gallery-opened-description-text").html();

			galleryCurrImg++;

			$("<img>").appendTo(".gallery-opened-photo");
			$(".gallery-opened-photo>img").attr("src", galleryImages[galleryCurrImg-1]);
		}
	}

	$(".gallery__item").on("click", openGallery);
	$("#gallery-close").on("click", closeGallery);
	$("#gallery-prev").on("click", galleryPrev);
	$("#gallery-next").on("click", galleryNext);

	$(".gallery-opened").on('keydown', function(event){
		if( event.key == "ArrowRight" ){
			galleryNext();
		}
		else if( event.key == "ArrowLeft" ){
			galleryPrev();
		}
		else if( event.key == "Escape" ){
			closeGallery();
		}
	})

	$(".gallery-opened").swipe({
		swipeStatus:function(event, phase, direction, distance, duration, fingerCount, fingerData, currentDirection)
    {
    	if( direction == "left" && phase == "end" ){
    		galleryNext();
    	}
    	else if( direction == "right" && phase == "end" ){
    		galleryPrev();
    	}
 	}
	})

})