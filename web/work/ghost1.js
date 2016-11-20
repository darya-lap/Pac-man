var ghost1 = {
    x : 240,
    y : 370,
    w: 0,
    h: 0,
    move_x: 0,
    move_y: 0,
    aim_x: 0,
    aim_y: 0,
    speed:2,
    xs: [20,60,120,180,240,300,360,420,480,520],
    ys: [20,100,160,220,280,340,400,460,520,580],
    px: new Array(868),
    py: new Array(868),


    draw:function () {
        spriteManager.drawSprite(ctx,"green",this.x-5,this.y-5);
    },

    move: function () {
        if (isGame) {
            var xx = -1;
            var yy = -1;
            for (var i in this.xs) {
                if ((player.x - 10) == this.xs[i]) {
                    xx = i;
                    break;
                }
            }
            if ((xx != -1) && (xx != 0)) {
                this.aim_x = this.xs[xx - 1];

                for (var j in this.ys) {
                    if ((player.y - 10) == this.ys[j]) {
                        yy = j;
                        break;
                    }
                }
                if ((yy != -1) && (yy != 0)) {
                    this.aim_y = this.ys[yy - 1];
                }
            }
            if ((xx == -1) || (xx == 0)){
                var dif = 900;
                var num = 0;
                for (i in this.xs){
                    if (Math.abs(player.x - this.xs[i]) < dif){
                        dif = Math.abs(player.x - this.xs[i]);
                        num = i;
                    }
                }
                this.aim_x = this.xs[num];
            }

            if ((yy == -1) || (yy == 0)){
                dif = 900;
                num = 0;
                for (i in this.ys){
                    if (Math.abs(player.y - this.ys[i]) < dif){
                        dif = Math.abs(player.y - this.ys[i]);
                        num = i;
                    }
                }
                this.aim_y = this.ys[num];
            }
            console.log(this.aim_x, this.aim_y);

            this.lee(Math.floor(this.x / 20), Math.floor(this.y / 20), Math.floor(this.aim_x / 20), Math.floor(this.aim_y / 20));

            console.log(this.aim_x, this.aim_y, Math.floor(this.aim_x / 20), Math.floor(this.aim_y / 20), this.px[1], this.py[1]);

            if (this.y == (this.py[1] * 20)) {
                this.move_y = 0;
                if (this.x < (this.px[1] * 20)) this.move_x = 1;
                else this.move_x = -1;
            }
            if (this.x == (this.px[1] * 20)) {
                this.move_x = 0;
                if (this.y < (this.py[1] * 20)) this.move_y = 1;
                else this.move_y = -1;
            }
            this.x += this.speed * this.move_x;
            this.y += this.speed * this.move_y;
            if (this.x < -15) {
                this.x = 580;
            }
            if (this.x > 580) {
                this.x = -15;
            }
        }
    },

    lee: function (ax,ay,bx,by) {
        var w = 28;
        var h = 31;
        var wall = -1;
        var blank = -2;
        var len;
        for (var i = 0; i < h; i++){
            for (var j = 0; j < w; j++){
                if (grid[i][j] != wall) grid[i][j] = blank;
            }
        }


        var dx = [1,0,-1,0];
        var dy = [0,1,0,-1];
        var d,x,y,k,stop;
        if ((grid[ay][ax] == wall) || (grid[by][bx] == wall)) return false;
        d = 0;
        (grid[ay])[ax] = 0;
        do{
            stop = true;
            for (y = 0; y < h; ++y)
                for (x = 0; x < w; ++x)
                    if (grid[y][x] == d){
                        for (k = 0; k < 4; ++k){
                            var iy = y + dy[k];
                            var ix = x + dx[k];
                            if (iy >= 0 && iy < h && ix >= 0 && ix < w && grid[iy][ix] == blank){
                                stop = false;
                                grid[iy][ix] = d + 1;
                            }
                        }
                    }
            d++;
        }while (!stop && grid[by][bx] == blank);
        if (grid[by][bx] == blank) return false;
        len = grid[by][bx];
        x = bx;
        y = by;
        d = len;
        while (d > 0){
            this.px[d] = x;
            this.py[d] = y;
            d--;
            for (k = 0; k < 4; ++k){
                iy = y + dy[k];
                ix = x + dx[k];
                if (iy >= 0 && iy < h && ix >= 0 && ix < w && grid[iy][ix] == d){
                    x = x + dx[k];
                    y = y + dy[k];
                    break;
                }
            }
        }
        this.px[0] = ax;
        this.py[0] = ay;
        return true;
    },

    init: function (x,y,w,h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

};