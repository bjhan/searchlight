/**
 * Created by Administrator on 2017/7/4.
 */
(function () {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    if (canvas.getContext) {
        console.log('支持canvas');
    } else {
        console.log('不支持canvas');
    }

    var WIDTH = canvas.width = 1000;
    var HEIGHT = canvas.height = 800;

    var endX=200,endY=100;
    var clickflag = 100;
    document.getElementById('fangda').onclick=function(){
        clickflag = clickflag + 10;
        var r = clickflag;
        draw(endX,endY,r);
    }
    canvas.onmousedown = touchStar;
    canvas.onmouseup = stopdraw;
    canvas.onmouseout = stopdraw;
    canvas.onmousemove = touchMove;

    context.beginPath();
    context.rect(0,0,WIDTH,HEIGHT);
    context.fillStyle='black';
    context.fill();
    context.closePath();

    var bgimg = new Image();
    bgimg.src='img/'+Math.round(Math.random()*2+1)+'.jpg';

    bgimg.onload = function(){
        draw(200,100,clickflag);
    }

    var touchflag=0;
    function touchStar(e){
        touchflag=1;

        var x,y;
        x = e.pageX - canvas.offsetLeft;
        y = e.pageY - canvas.offsetTop;
        endX=x;
        endY=y;
        var r = clickflag;
        draw(x,y,r);
    }
    function stopdraw(e){
      touchflag=0;

    }
    function touchMove(e){
        if(touchflag==1){
            var x,y;
            x = e.pageX - canvas.offsetLeft;
            y = e.pageY - canvas.offsetTop;
            var r = clickflag;

            endX=x;
            endY=y;
            draw(x,y,r);
        }
    }
    function draw(x,y,r){

        context.save();
        //context.clearRect(0,0,WIDTH,HEIGHT);
        context.beginPath();
        context.rect(0,0,WIDTH,HEIGHT);
        context.fillStyle='black';
        context.fill();
        context.closePath();

        var bjpat = context.createPattern(bgimg,'repeat');
        context.beginPath();
        context.arc(x,y,r,0,2*Math.PI);
        context.clip();
        context.fillStyle = bjpat;
        context.fill();
        context.closePath();
        context.restore();
    }


})();