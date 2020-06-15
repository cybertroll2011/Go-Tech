$(document).ready(function(){
	var jobItem = $(".job-item");
	var jobBtn = $(".jobs-btn");

	function jobFilter () {
		var btnAttr = $(this).attr("data-job");

		$(jobBtn).removeClass("jobs-btn-active");
		$(this).addClass("jobs-btn-active");

		for( let i = 0; i < jobItem.length; i++ ){
			var jobAttr = jobItem.eq(i).attr("data-job");
			jobItem.eq(i).css("display", "none");
			
			if( btnAttr == jobAttr ){
				jobItem.eq(i).css("display", "block");
			}
		}

		if( btnAttr == "all-jobs" ){
			for( let k = 0; k < jobItem.length; k++ ){
				jobItem.eq(k).css("display", "block");
			}
		}
	}

	$(".jobs-btn").on("click", jobFilter);
})