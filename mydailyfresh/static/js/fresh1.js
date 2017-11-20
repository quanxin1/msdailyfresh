$(function(){
    var timer=setInterval(picMove,900);
    var pictimer=setInterval(proMove,1000);
    var $leftNum=0;
    var leftNum=0;
    var $proNum=0;
    /*海报无缝滚动*/
    function picMove(){
            // alert(typeof($leftNum));
           $leftNum=parseInt($('#listnum').css('left'));
        $('#listnum').animate({'left':$leftNum-760},500,function(){
            if($leftNum<=-2280){
                // alert($leftNum);
                $('#listnum').css({"left":0});
                // $leftNum=0;
                // alert($leftNum);
            }
        });
            
    }
    picMove();
   /*商品图片无缝滚动*/
  function proMove(){
    //   alert("ok");
        $proNum=parseInt($('#listhaixian').css("left"));
        // alert($proNum-250);
        $('#listhaixian').animate({"left":$proNum-250},500,function(){
            if ($proNum<=-250){
                $('#listhaixian').css({"left":0});
            }
        })
    }
    proMove()
    /*鼠标滑过图片停止移动*/
    $('.bposter').mouseenter(function(){
        clearInterval(timer);
    })
    $('.bposter').mouseleave(function(){
        timer=setInterval(picMove,900);
    })
    /*鼠标点击图片左右移动*/ 
    $(".button1").click(function(){
         leftNum=parseInt($('#listnum').css('left'));
        //  alert(parseInt(leftNum));
        if (leftNum%760==0){
            $('#listnum').animate({'left':leftNum-760},500,function(){
             if(leftNum<=-2280){
                 $('#listnum').css({"left":0})
             }
         });
        }
         
    })
        
    $(".button2").click(function(){
        
         leftNum=parseInt($('#listnum').css('left'));
         if (leftNum%760==0){
            //  alert(typeof(leftNum+760));
             $('#listnum').animate({'left':leftNum+760},500,function(){
                 if(leftNum>=-760){
                $('#listnum').css({"left":-3040})
                }
             });
         }
    })
    /*设置input框的focus及blur状态*/
    $('#sel').focus(function(){
        if ($('#sel').val()=="请输入内容"){
            $('#sel').val("");
            $('#sel').css({"background":"none","color":"#333"});
        }
    })
    $('#sel').blur(function(){
        if ($('#sel').val()==""){
            $('#sel').val("请输入内容");
            $('#sel').css({"background":"url(images/selectpic.png) no-repeat 10px","color":"#999"});
        }
    })
    /*搜索框fix事件*/
    // $(window).scroll(function(){
    //     var nowTop=$(document).scrollTop();
    //     // alert(typeof(nowTop));
    //     if(nowTop>=65){
    //         // alert(typeof(nowTop));
    //         // $(".select").css({position:"fixed",top:"30px",left:'360px'});
    //         // $('.selecbutton').css({position:"fixed",top:"30px",left:'880px'})
    //         $('head1').css({position:"fixed",top:"30px",left:'150px'})
    //     }
    //     else{
    //         $(".head").css({position:"static"})
    //     }
    // })
    

})