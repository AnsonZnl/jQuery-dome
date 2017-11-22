$(function(){
	$(window).scroll(function(){
	 	if($(window).scrollTop()>100){
	 		$(".TOP").fadeIn(500);
	 	}else{
	 		$(".TOP").fadeOut(500);
	 	}
	 })
	 $(".TOP").click(function(){
	 	$("body").animate({"scrollTop":0},1000);
	 })
	 $(".nav li").hover(function(){
	 	$(this).children(".erji").stop().slideDown(500);
	 },function(){})
	 $(".XL").hover(function(){},function(){
	 	$(this).children(".erji").stop().slideUp(500);
	 })
	 var n=0;
	 function run(){
	 	n++;
	 	n=(n==3)?0:n;
	 	$(".banner li").eq(n).fadeIn(500).siblings("li").fadeOut(500);
	 }
	 setInterval(run,2000);
})