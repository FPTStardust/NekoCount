
	
	var memorial = new Date("2018-07-13");
	var systime = new Date();
	var dif = parseInt(Math.abs(systime - memorial) / 1000 / 60 / 60 / 24);
	var bnrDate = dif.toString(2).split("");
	
$(document).ready(function(){
	"use strict";
	//$("body").css("width", window.screen.width * window.devicePixelRatio);
	$("body").css("width", window.innerWidth);
	$("body").css("height", window.innerHeight);
	$(window).resize(function () {
	
	$("body").css("width", window.innerWidth);
	$("body").css("height", window.innerHeight);
});
	
	
	$("#clcNeko").click(function(){
		
			$("#neko").text("");
		for ( var x in bnrDate)
		{
			if(bnrDate.hasOwnProperty(x)){
			if(bnrDate[x]==="1") {$("#neko").append('<img height="35px" src="img/ichi.jpg">');}
			if(bnrDate[x]==="0") {$("#neko").append('<img height="35px" src="img/zero.gif">');}
			}
		}
  	});
});