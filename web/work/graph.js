var canvas, ctx, width, height;
var grid;
var init = function () {
    canvas = document.getElementById('canvasId');
    width = canvas.width;
    height = canvas.height;
    ctx = canvas.getContext('2d');
    grid  = new Array(height/20);
    for (var i = 0; i < (height/20); i++){
        grid[i] = new Array(width/20);
    }

};

// var fillAll = function (colorBack,colorLine) {
//     ctx.fillStyle = colorBack;
//     ctx.fillRect(0,0,width,height);
//     //drawNet();
//     drawMap(colorLine);
//     ctx.stroke();
// };

var clearAll = function () {
    ctx.clearRect(0,0,width,height);
};

var drawRect = function (x,y,w,h,color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
};

/*var drawMap = function (color) {
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = color;

    //рисование контура
    ctx.moveTo(530,10);

    ctx.arc(310,30,20,1.5*Math.PI,Math.PI,true);
    ctx.arc(280,80,10,0,Math.PI,false);
    ctx.arc(250,30,20,0,1.5*Math.PI,true);

    ctx.arc(30,30,20,1.5*Math.PI,Math.PI,true);

    ctx.arc(30,170,20,Math.PI,0.5*Math.PI,true);
    ctx.arc(90,210,20,1.5*Math.PI,0,false);
    ctx.arc(90,250,20,0,0.5*Math.PI,false);
    ctx.lineTo(0,270);

    ctx.moveTo(0,310);
    ctx.arc(90,330,20,1.5*Math.PI,0,false);
    ctx.arc(90,370,20,0,0.5*Math.PI,false);
    ctx.arc(30,410,20,1.5*Math.PI,Math.PI,true);

    ctx.arc(30,470,20,Math.PI,0.5*Math.PI,true);
    ctx.arc(40,500,10,1.5*Math.PI,0.5*Math.PI,false);
    ctx.arc(30,530,20,1.5*Math.PI,Math.PI,true);

    ctx.arc(30,590,20,Math.PI,0.5*Math.PI,true);

    ctx.arc(530,590,20,0.5*Math.PI,0,true);
//
    ctx.arc(530,530,20,0,1.5*Math.PI,true);
    ctx.arc(520,500,10,0.5*Math.PI,1.5*Math.PI,false);
    ctx.arc(530,470,20,0.5*Math.PI,0,true);

    ctx.arc(530,410,20,0,1.5*Math.PI,true);
    ctx.arc(470,370,20,0.5*Math.PI,Math.PI,false);
    ctx.arc(470,330,20,Math.PI,1.5*Math.PI,false);
    ctx.lineTo(560,310);

    ctx.moveTo(560,270);
    ctx.arc(470,250,20,0.5*Math.PI,Math.PI,false);
    ctx.arc(470,210,20,Math.PI,1.5*Math.PI,false);
    ctx.arc(530,170,20,0.5*Math.PI,0,true);

    ctx.arc(530,30,20,0,1.5*Math.PI,true);



//Рисование препятствий 1 ряд

    ctx.moveTo(70,50);
    ctx.lineTo(90,50);
    ctx.moveTo(70,90);
    ctx.lineTo(90,90);
    ctx.moveTo(70,50);
    ctx.arc(70,70,20,1.5*Math.PI,0.5*Math.PI,true);
    ctx.moveTo(90,50);
    ctx.arc(90,70,20,1.5*Math.PI,0.5*Math.PI,false);

    ctx.moveTo(170,50);
    ctx.lineTo(210,50);
    ctx.moveTo(170,90);
    ctx.lineTo(210,90);
    ctx.moveTo(170,50);
    ctx.arc(170,70,20,1.5*Math.PI,0.5*Math.PI,true);
    ctx.moveTo(210,50);
    ctx.arc(210,70,20,1.5*Math.PI,0.5*Math.PI,false);

    ctx.moveTo(350,50);
    ctx.lineTo(396,50);
    ctx.moveTo(350,90);
    ctx.lineTo(390,90);
    ctx.moveTo(350,50);
    ctx.arc(350,70,20,1.5*Math.PI,0.5*Math.PI,true);
    ctx.moveTo(390,50);
    ctx.arc(390,70,20,1.5*Math.PI,0.5*Math.PI,false);

    ctx.moveTo(470,50);
    ctx.lineTo(490,50);
    ctx.moveTo(470,90);
    ctx.lineTo(490,90);
    ctx.moveTo(470,50);
    ctx.arc(470,70,20,1.5*Math.PI,0.5*Math.PI,true);
    ctx.moveTo(490,50);
    ctx.arc(490,70,20,1.5*Math.PI,0.5*Math.PI,false);

//Рисование препятствий 2 ряд

    ctx.moveTo(100,130);
    ctx.arc(60,140,10,1.5*Math.PI,0.5*Math.PI,true);
    ctx.arc(100,140,10,0.5*Math.PI,1.5*Math.PI,true);

    ctx.moveTo(150,260);
    ctx.arc(160,140,10,Math.PI,0,false);
    ctx.arc(180,180,10,Math.PI,0.5*Math.PI,true);
    ctx.arc(220,200,10,1.5*Math.PI,0.5*Math.PI,false);
    ctx.arc(180,220,10,1.5*Math.PI,Math.PI,true);
    ctx.arc(160,260,10,0,Math.PI,false);

    ctx.moveTo(340,130);
    ctx.arc(220,140,10,1.5*Math.PI,0.5*Math.PI,true);
    ctx.arc(260,160,10,1.5*Math.PI,0,false);
    ctx.arc(280,200,10,Math.PI,0,true);
    ctx.arc(300,160,10,Math.PI,1.5*Math.PI,false);
    ctx.arc(340,140,10,0.5*Math.PI,1.5*Math.PI,true);

    ctx.moveTo(390,180);
    ctx.arc(400,140,10,Math.PI,0,false);
    ctx.arc(400,260,10,0,Math.PI,false);
    ctx.arc(380,220,10,0,1.5*Math.PI,true);
    ctx.arc(340,200,10,0.5*Math.PI,1.5*Math.PI,false);
    ctx.arc(380,180,10,0.5*Math.PI,0,true);

    ctx.moveTo(500,130);
    ctx.arc(460,140,10,1.5*Math.PI,0.5*Math.PI,true);
    ctx.arc(500,140,10,0.5*Math.PI,1.5*Math.PI,true);

//Поле для чуваков

    ctx.moveTo(340,250);
    ctx.arc(220,260,10,1.5*Math.PI,Math.PI,true);
    ctx.arc(220,320,10,Math.PI,0.5*Math.PI,true);
    ctx.arc(340,320,10,0.5*Math.PI,0,true);
    ctx.arc(340,260,10,0,1.5*Math.PI,true);

//Препятствия ряд 3

    ctx.moveTo(150,380);
    ctx.arc(160,320,10,Math.PI,0,false);
    ctx.arc(160,380,10,0,Math.PI,false);


    ctx.moveTo(260,390);
    ctx.arc(220,380,10,0.5*Math.PI,1.5*Math.PI,false);
    ctx.arc(340,380,10,1.5*Math.PI,0.5*Math.PI,false);
    ctx.arc(300,400,10,1.5*Math.PI,Math.PI,true);
    ctx.arc(280,440,10,0,Math.PI,false);
    ctx.arc(260,400,10,0,1.5*Math.PI,true);

    ctx.moveTo(390,380);
    ctx.arc(400,320,10,Math.PI,0,false);
    ctx.arc(400,380,10,0,Math.PI,false);

//Препятствия ряд 4

    ctx.moveTo(100,430);
    ctx.arc(60,440,10,1.5*Math.PI,0.5*Math.PI,true);
    ctx.arc(80,460,10,1.5*Math.PI,0,false);
    ctx.arc(100,500,10,Math.PI,0,true);
    ctx.arc(100,440,10,0,1.5*Math.PI,true);

    ctx.moveTo(220,430);
    ctx.arc(160,440,10,1.5*Math.PI,0.5*Math.PI,true);
    ctx.arc(220,440,10,0.5*Math.PI,1.5*Math.PI,true);

    ctx.moveTo(400,430);
    ctx.arc(340,440,10,1.5*Math.PI,0.5*Math.PI,true);
    ctx.arc(400,440,10,0.5*Math.PI,1.5*Math.PI,true);

    ctx.moveTo(500,430);
    ctx.arc(460,440,10,1.5*Math.PI,Math.PI,true);
    ctx.arc(460,500,10,Math.PI,0,true);
    ctx.arc(480,460,10,Math.PI,1.5*Math.PI,false);
    ctx.arc(500,440,10,0.5*Math.PI,1.5*Math.PI,true);

//Препятствия ряд 5

    ctx.moveTo(150,540);
    ctx.arc(160,500,10,Math.PI,0,false);
    ctx.arc(180,540,10,Math.PI,0.5*Math.PI,true);
    ctx.arc(220,560,10,1.5*Math.PI,0.5*Math.PI,false);
    ctx.arc(60,560,10,0.5*Math.PI,1.5*Math.PI,false);
    ctx.arc(140,540,10,0.5*Math.PI,0,true);

    ctx.moveTo(340,490);
    ctx.arc(220,500,10,1.5*Math.PI,0.5*Math.PI,true);
    ctx.arc(260,520,10,1.5*Math.PI,0,false);
    ctx.arc(280,560,10,Math.PI,0,true);
    ctx.arc(300,520,10,Math.PI,1.5*Math.PI,false);
    ctx.arc(340,500,10,0.5*Math.PI,1.5*Math.PI,true);

    ctx.moveTo(390,540);
    ctx.arc(400,500,10,Math.PI,0,false);
    ctx.arc(420,540,10,Math.PI,0.5*Math.PI,true);
    ctx.arc(500,560,10,1.5*Math.PI,0.5*Math.PI,false);
    ctx.arc(340,560,10,0.5*Math.PI,1.5*Math.PI,false);
    ctx.arc(380,540,10,0.5*Math.PI,0,true);


};*/

var drawPacman = function (x,y,r,angle1,angle2,colorMain,colorMouse) {
    drawCircle(x,y,r,colorMain);
    drawArc(x,y,r,angle1,angle2,colorMouse);
};

var drawCircle = function (x, y, r, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2,false);
    ctx.fill();
};

var drawArc = function (x,y,r,angle1,angle2,color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.arc(x,y,r+1,angle1,angle2,true);
    ctx.fill();
    ctx.closePath();
}

/*var drawNet = function () {
    ctx.beginPath();
    ctx.strokeStyle = 'gray';
    ctx.lineWidth = 1;
    var x = 20;
    var y = 20;
    for (var i = 1; i <= 26;i++){
        for (var j = 1; j <= 29;j++){
            ctx.rect(x,y,20,20);
            ctx.stroke();
            y += 20;
        }
        y = 20;
        x += 20;
    }
    ctx.closePath();
};*/

var isCollision = function (x1,y1,w1,h1,x2,y2,w2,h2) {
    return(x1 < x2 + w2 &&
    x1 + w1 > x2 &&
    y1 < y2 + h2 &&
    h1 + y1 > y2);
};