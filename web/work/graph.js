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
/*var clearAll = function () {
    ctx.clearRect(0,0,width,height);
};*/

var drawRect = function (x,y,w,h,color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
};

var drawCircle = function (x, y, r, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2,false);
    ctx.fill();
};

var isCollision = function (x1,y1,w1,h1,x2,y2,w2,h2) {
    return(x1 < x2 + w2 &&
    x1 + w1 > x2 &&
    y1 < y2 + h2 &&
    h1 + y1 > y2);
};