/**
 * Created by lenovo on 17/3/31 031.
 */

$(function(){
    $("#skin li").click(function(){
        var n=$(this).index();
        //取li的索引。赋给n
        $(this).addClass("selected").siblings("li").removeClass();
        //追加样式.selected（背景图片定位）给.然后兄弟节点清除当前使用过的样式selected
        $("#cssFile").attr("href","css/skin/skin_"+n+".css")
        //找到cssFile的属性href。改变他的路径（href），然后匹配索引，
    })
    $("nav ul li").hover(function(){
        $(this).find("ul").stop().slideDown(1000);//下来
    },function(){
        $(this).find("ul").stop().slideUp(1000);//上来
    })
    var n=0;//变量
    function run(){
        n++;
        n=(n==5)?0:n;// 三元表达式 如果n=5.那么n=0.如果n=n.则n=n
//              if(n==5){//如果n=5
//                  n=0;
//              }
        $("#mc1 li").eq(n).fadeIn(1000).siblings("li").fadeOut(1000); //fadeIn显示，fadeOut隐藏
        $("#mc2 li").eq(n).css({"background":"red"}).siblings("li").css({"background":"#4a4a4a"});
    }
    var timer= setInterval(run,3000);//替换时间。
    $("#mc2 li").mouseenter(function(){//鼠标移入事件
            clearInterval(timer);//停止替换
            var i=$(this).index();//取出当前li的索引
//                alert(i);//弹出
            $("#mc1 li").eq(i).fadeIn(1000).siblings("li").fadeOut(1000)//让鼠标移入当前的li显示对应的img.兄弟节点隐藏(淡出)
//                        $("#mc2 li").eq(i).css({"background":"red"}).siblings("li").css({"background":"#000"});
            $(this).css({"background":"red"}).siblings("li").css({"background":"#4a4a4a"});
            //找到第.eq(i).li、当前i变成红色。兄弟节点其余变成黑色、
        })
        .mouseleave(function(){
            timer=setInterval(run,3000);
        })//鼠标移除继续轮播


    $(".jqzoom").jqueryzoom({
        xzoom:310,
        yzoom:310,
    });
    $(".mc4 a:eq(0)").hover(function(){
        $(this).css("background","#6a86b6").siblings("a").css("background","#fff")
        $(".mc4 span:eq(0)").show().siblings("span").hide();
    },function(){
    });$(".mc4 a:eq(1)").hover(function(){
        $(this).css("background","#6a86b6").siblings("a").css("background","#fff")
        $(".mc4 span:eq(1)").show().siblings("span").hide();
    },function(){
    });$(".mc4 a:eq(2)").hover(function(){
        $(this).css("background","#6a86b6").siblings("a").css("background","#fff")
        $(".mc4 span:eq(2)").show().siblings("span").hide();
    },function(){
    })
    $(".mc2").click(function(){
        $(".jqzoom img").attr("src","images/pro_img/blue_two_small.jpg")
        $(".jqzoom img").attr("jqimg","images/pro_img/blue_two_big.jpg")
    });$(".mc1").click(function(){
        $(".jqzoom img").attr("src","images/pro_img/blue_one_small.jpg")
        $(".jqzoom img").attr("jqimg","images/pro_img/blue_one_big.jpg")
    });$(".mc3").click(function(){
        $(".jqzoom img").attr("src","images/pro_img/blue_three_small.jpg")
        $(".jqzoom img").attr("jqimg","images/pro_img/blue_three_big.jpg")
    })
    $(".huang").click(function(){
        $(".mc1 img").attr("src","images/pro_img/green_one.jpg")
        $(".mc2 img").attr("src","images/pro_img/green_two.jpg")
        $(".mc3 img").attr("src","images/3-1.jpg")
        $(".jqzoom img").attr("src","images/pro_img/green_one_small.jpg")
        $(".jqzoom img").attr("jqimg","images/pro_img/green_one_big.jpg")
        $(".lanbai").html("浅蓝白")
        $(".mc2").click(function(){
            $(".jqzoom img").attr("src","images/pro_img/green_two_small.jpg")
            $(".jqzoom img").attr("jqimg","images/pro_img/green_two_big.jpg")
        });$(".mc1").click(function(){
            $(".jqzoom img").attr("src","images/pro_img/green_one_small.jpg")
            $(".jqzoom img").attr("jqimg","images/pro_img/green_one_big.jpg")
        });$(".mc3").click(function(){
            $(".jqzoom img").attr("src","images/1111364YP5.jpg")
            $(".jqzoom img").attr("jqimg","images/1024x768_242f56c4db4464e.jpg")
        })
    })
    $(".qing").click(function(){
        $(".mc1 img").attr("src","images/pro_img/yellow_one.jpg")
        $(".mc2 img").attr("src","images/pro_img/yellow_two.jpg")
        $(".mc3 img").attr("src","images/pro_img/yellow_three.jpg")
        $(".jqzoom img").attr("src","images/pro_img/yellow_one_small.jpg")
        $(".jqzoom img").attr("jqimg","images/pro_img/yellow_one_big.jpg")
        $(".lanbai").html("黄白")
        $(".mc2").click(function(){
            $(".jqzoom img").attr("src","images/pro_img/yellow_two_small.jpg")
            $(".jqzoom img").attr("jqimg","images/pro_img/yellow_two_big.jpg")
        });$(".mc1").click(function(){
            $(".jqzoom img").attr("src","images/pro_img/yellow_one_small.jpg")
            $(".jqzoom img").attr("jqimg","images/pro_img/yellow_one_big.jpg")
        });$(".mc3").click(function(){
            $(".jqzoom img").attr("src","images/pro_img/yellow_three_small.jpg")
            $(".jqzoom img").attr("jqimg","images/pro_img/yellow_three_big.jpg")
        })
    })
    $(".lan").click(function(){
        $(".mc1 img").attr("src","images/pro_img/blue_one.jpg")
        $(".mc2 img").attr("src","images/pro_img/blue_three.jpg")
        $(".mc3 img").attr("src","images/pro_img/blue_two.jpg")
        $(".jqzoom img").attr("src","images/pro_img/blue_one_small.jpg")
        $(".jqzoom img").attr("jqimg","images/pro_img/blue_one_big.jpg")
        $(".lanbai").html("蓝白")
        $(".mc2").click(function(){
            $(".jqzoom img").attr("src","images/pro_img/blue_two_small.jpg")
            $(".jqzoom img").attr("jqimg","images/pro_img/blue_two_big.jpg")
        });$(".mc1").click(function(){
            $(".jqzoom img").attr("src","images/pro_img/blue_one_small.jpg")
            $(".jqzoom img").attr("jqimg","images/pro_img/blue_one_big.jpg")
        });$(".mc3").click(function(){
            $(".jqzoom img").attr("src","images/pro_img/blue_three_small.jpg")
            $(".jqzoom img").attr("jqimg","images/pro_img/blue_three_big.jpg")
        })
    })
    $(".chicun:eq(0)").click(function(){
        $(".wei").html("S")
    });$(".chicun:eq(1)").click(function(){
        $(".wei").html("L")
    });$(".chicun:eq(2)").click(function(){
        $(".wei").html("SL")
    });$(".chicun:eq(3)").click(function(){
        $(".wei").html("LL")
    });
    ; $("#sele").change(function(){
        var L=$(this).val();

        $(".zongji").html(L*200);
    });
    $("#xing li:eq(0)").click(function(){
        $("#xing").css("background-position","0px -16px")
    });$("#xing li:eq(1)").click(function(){
        $("#xing").css("background-position","0px -32px")
    });$("#xing li:eq(2)").click(function(){
        $("#xing").css("background-position","0px -48px")
    });$("#xing li:eq(3)").click(function(){
        $("#xing").css("background-position","0px -64px")
    });$("#xing li:eq(4)").click(function(){
        $("#xing").css("background-position","0px -80px")
    })
})
