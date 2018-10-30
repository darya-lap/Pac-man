var partition = {
    nodes :[],

    add: function(x,y,w,h,c){
        var tmp = new _Enemy(x,y,w,h,c);
        this.nodes.push(tmp);
    },

    generate : function () {
        var x = [0,0,0,540,540,0,40,140,260,320,440,40,140,180,200,260,320,380,440,20,20,440,440,200,140,380,200,40,80,140,260,320,440,440,20,40,140,200,260,380,320,500];
        var y = [0,20,300,20,300,600,40,40,20,40,40,120,120,180,120,160,180,120,120,180,300,180,300,240,300,300,360,420,460,420,400,420,420,460,480,540,480,480,520,480,540,480];
        var w = [560,20,20,20,20,560,80,100,40,100,80,80,40,60,160,40,60,40,80,100,100,100,100,160,40,40,160,80,40,100,40,100,80,40,40,200,40,160,40,40,200,40];
        var h = [20,260,300,260,300,20,60,60,80,60,60,40,160,40,40,60,40,160,40,100,100,100,100,100,100,100,40,40,60,40,60,40,40,60,40,40,60,40,60,60,40,40];
        var count = 42;
        for (var i = 0; i <= count; i++){
            this.add(x[i],y[i],w[i],h[i],'green');
            var x1 = x[i]/20;
            var y1 = y[i]/20;
            var h1 = h[i]/20;
            var w1 = w[i]/20;
            for (var j = 0; j < h1; j++){
                for (var l = 0; l < w1; l++){
                    grid[y1][x1] = -1;
                    x1++;
                }
                x1 = x[i]/20;
                y1++;
            }
        }
    },

    draw: function () {
        for (var en in this.nodes){
            this.nodes[en].draw();
        }
    }
};

var _Enemy = function (x, y, w, h, color){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
};

_Enemy.prototype.draw = function () {
    drawRect(this.x,this.y,this.w,this.h,this.color);
};
