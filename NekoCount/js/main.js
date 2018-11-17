
	
	var memorial = new Date("2018-07-14");
	//把这个日期改成相应的纪念日即可。
	var systime = new Date();
	var dif = parseInt(Math.abs(systime - memorial+36*60*60*1000) / 1000 / 60 / 60 / 24);
	//由于new Date的日期是从中午十二点开始的，外加程序里第一天会被算成第0天，所以需要在system time上加上36小时。
	var bnrDate = dif.toString(2).split("");
	
$(document).ready(function(){
	"use strict";
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
			if(bnrDate[x]==="1") {$("#neko").append('<img height="35px" src="img/ichi.png">');}
			if(bnrDate[x]==="0") {$("#neko").append('<img height="35px" src="img/zero.gif">');}
			}//这里是吧01串转化为滑稽和纠结的表情，当然可以单纯的换成喵咪之类的汉字，或者其他各种支持的元素，直接写HTML代码即可。
		}
  	});
});