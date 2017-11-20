window.onload=function(){
    var btn1=document.getElementById("btn1");
    var btn2=document.getElementById("btn2");
    var list=document.getElementById("list");
    var solid=document.getElementById("solid");
    var listhaixian=document.getElementById("listhaixian");
    var solidhaixian=document.getElementById("solidhaixian");
    var listhaixian1=document.getElementById("listhaixian1");
    var solidhaixian1=document.getElementById("solidhaixian1");
    var haixianli=listhaixian.getElementsByTagName("li");
    var haixianli1=listhaixian1.getElementsByTagName("li");
    var muli=list.getElementsByTagName("li");
    for(var i=0;i<muli.length;i++){
        list.innerHTML+muli[i];
    }; 
    for(var j=0;j<haixianli.length;j++){
        listhaixian.innerHTML+haixianli[j];
    };
    for(var z=0;z<haixianli.length;z++){
        listhaixian1.innerHTML+haixianli[z];
    };
    var timer=null;
    var timerhaixian=null;
    // var timerhaixian1=null;
    var speed=-20;
    var speedhaixian=-250;
    var leftNum=0;
    var leftNumhaixian=0;
    var leftNumhaixian1=0;
    var timerone=null;

    timer=setInterval(imgMove,40);
    timerhaixian=setInterval(hxMove,1000);
    timerhaixian1=setInterval(hxMove1,1000);
    function hxMove(){
        listhaixian.style.left=leftNumhaixian+"px";
        leftNumhaixian+=speedhaixian;
        
        if (leftNumhaixian<-250){
            
            leftNumhaixian=0;
            return;
        } 
        
    }
hxMove()
 function hxMove1(){
        listhaixian1.style.left=leftNumhaixian1+"px";
        leftNumhaixian1+=speedhaixian;
        if (leftNumhaixian1<-250){
            leftNumhaixian1=0;
            return;
        }
 }
hxMove1()

    solidhaixian.onmouseover=function(){
        clearInterval(timerhaixian)
    }
    solidhaixian.onmouseout=function(){
        timerhaixian=setInterval(hxMove,1000);
    }
    solidhaixian1.onmouseover=function(){
        clearInterval(timerhaixian1)
    }
    solidhaixian1.onmouseout=function(){
        timerhaixian1=setInterval(hxMove1,1000);
    }
    function imgMove(){
        
        list.style.left=leftNum+"px";
        leftNum+=speed;
        if (leftNum<-2280){
            clearTimeout(timerone);
            leftNum=0;
            return;
        }
        if (leftNum>0){
            leftNum=-2280;
            return;
        }
         if(leftNum==-2280){
            timerone=setTimeout(function(){alert("ok")},1000);
            return;
        }
      
    }
      btn2.onclick=function(){
          if (leftNum<-2280){
            leftNum=0;
            return;
        }
         if (leftNum>0){
            leftNum=-2280;
            return;
        }
        list.style.left=leftNum+"px";
        leftNum+=760;
        return;
        }
      btn1.onclick=function(){
           if (leftNum<-2280){
            leftNum=0;
            return;
        }
         if (leftNum>0){
            leftNum=-2280;
            return;
        }
        list.style.left=leftNum+"px";
        leftNum-=760;
        return;
        }
     solid.onmouseover=function(){
         clearInterval(timer);
     }
     solid.onmouseout=function(){
         timer=setInterval(imgMove,1000);
     }
}