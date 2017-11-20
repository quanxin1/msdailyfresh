$(function(){
    var imgli=$('#solid #listnum li');
    var num=imgli.length;
    var flag=false;
    var timer=null;
    for(var i=0;i<num;i++){
        var pli = $("<li>");
        pli.appendTo($("#solid .point"));
        if(i==0){
            $("#solid .point li").eq(i).addClass("active");
        }
    }
    imgli.not(":first").css("left","760px");
    var nowli=0;
    var newli=0;
    $("#solid .point li").click(function(){
        newli=$(this).index();
        fnMove();
    })
    function fnMove(){
        if(newli>nowli){
            imgli.eq(newli).css("left","760px");
            imgli.eq(nowli).stop().animate({"left":"-760"},500,function(){flag=false});
            
        }
        if(newli<nowli){
            imgli.eq(newli).css("left","-760px");
            imgli.eq(nowli).stop().animate({"left":"760"},500,function(){flag=false});
            // imgli.eq(newli).animate({"left":"0px"},500);
            // nowli=newli;
        }
        if(newli<0){
            newli=num-1;
            imgli.eq(newli).css("left","-760px");
            imgli.eq(nowli).stop().animate({"left":"760px"},500,function(){flag=false});
            // imgli.eq(newli).animate({"left":"0px"},500);
            // nowli=newli;
        }
        if(newli>num-1){
            newli=0;
            imgli.eq(newli).css("left","760px");
            imgli.eq(nowli).stop().animate({"left":"-760px"},500,function(){flag=false});
            // imgli.eq(newli).animate({"left":"0px"},500);
            // nowli=newli;
        }
        imgli.eq(newli).stop().animate({"left":"0px"},500,function(){flag=false});
        nowli=newli;
        $("#solid .point li").eq(newli).addClass("active").siblings().removeClass();
    }
   $("#solid #btn1").click(function(){
       
       if(flag){
           return false;
       }
       flag=true;
       newli--;
       fnMove();
   })
   $("#solid #btn2").click(function(){
       if(flag){
           return false;
       }
       flag=true;
       newli++;
       fnMove();
   })
  
   timer=setInterval(autoPlay,1000);
   function autoPlay(){
       if(flag){
           return false;
       }
       flag=true;
       newli++;
       fnMove();
   }
    $("#solid").hover(function(){
       clearInterval(timer);
       timer=null;
   },function(){
       timer=setInterval(autoPlay,1000);
   })
   /*扇贝武昌鱼轮播图*/
   var next=0;
   var prev=0;
   var num1=$("#solidhaixian #listhaixian li").length;
   var img=$("#solidhaixian #listhaixian li");
   var timer1 =setInterval(autoPlay1,1000);
   function autoPlay1(){
       next++;
       if(next>prev){
            img.eq(next).css("left","250px");
            img.eq(prev).stop().animate({"left":"-250"},500);
            
        }
        if(next>num1-1){
            next=0;
            img.eq(next).css("left","250px");
            img.eq(prev).stop().stop().animate({"left":"-250px"},500);
        }
        img.eq(next).stop().animate({"left":"0px"},500);
        prev=next;

   }
})