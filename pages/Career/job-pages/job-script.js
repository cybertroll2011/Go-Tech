$(document).ready(function(){
	var applyJobForm = $("#apply-job");

	$("#job-info-apply").on("click", function(){
		$(".job-apply-form-wrapper").addClass("job-apply-form-wrapper-active");
		$("body").addClass("body-no-scroll");
	})
	$(".job-apply-form-wrapper").on("click", function(e) {
		if( !applyJobForm.is(e.target) && applyJobForm.has(e.target).length === 0 ){
			$(".job-apply-form-wrapper").removeClass("job-apply-form-wrapper-active");
			$("body").removeClass("body-no-scroll");
		}
	})
});