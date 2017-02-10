$(function(){
	var carouselList = $("#carousel ul");
    
    function changeSlideNext(){
		carouselList.animate({marginLeft:-500}, 500, placeFirstSlideAfterLast);
	};
  
	function placeFirstSlideAfterLast(){
		carouselList.find("li:last").after(carouselList.find("li:first"));
		carouselList.css({marginLeft:0});
	};

	function changeSlidePrevious(){
		carouselList.animate({marginLeft:0}, 500);
	};
  
	function placeLastSlideBeforeFirst(){
		carouselList.find("li:first").before(carouselList.find("li:last"));
		carouselList.css({marginLeft:-500});
		changeSlidePrevious();
	};

	setInterval(changeSlideNext,3000);
	$('#next').click(function() {
		changeSlideNext();
	});
	$('#previous').click(function() {
		placeLastSlideBeforeFirst();
	});
});
