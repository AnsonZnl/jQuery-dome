///*张宁乐于2017年4/3在泊职创建的js*/
$(function(){
    //换肤
    $("#skin li").click(function(){
        var i=$(this).index();
        $(this).addClass("selected").siblings("li").removeClass("selected");
        $("#cssFild").attr("href","css/skin/skin_"+i+".css");
    })//下拉列表
    $(".nav li").hover(function(){
        $(this).find(".jnNav").stop().slideDown();
    },function(){
        $(this).find(".jnNav").stop().slideUp();
    });
    //轮播图
    var n=0;
    function run(){
        n++;
        n=(n==5)?0:n;
        $("#JS_imgWrap img").eq(n).fadeIn(1000).siblings("img").fadeOut(1000);
        $("#jnImageroll div a").eq(n).addClass("chos").siblings("a").removeClass("chos")
        
    }
    var timer=setInterval(run,2000);
    $("#jnImageroll div a").hover(function(){
        clearInterval(timer);//移入停止计时器
        n=$(this).index();
        $("#JS_imgWrap img").eq(n).fadeIn(1000).siblings("img").fadeOut(1000);
        $("#jnImageroll div a").eq(n).addClass("chos").siblings("a").removeClass("chos")
    },function(){
        timer=setInterval(run,2000);
    });
    //轮播四张图
    $("#jnBrandTab ul li").click(function(){
        var d=$(this).index();
        $("#jnBrandList").animate({"left":-780*d+"px"},1000);
    })
    
})