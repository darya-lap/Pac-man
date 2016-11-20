var player = {
    score : 0,
    lives: 3,
    x : 280,
    y : 470,
    move_x: 0,
    move_y: 0,
    radius: 15,
    color:'yellow',
    speed:2,
    xs: [30,70,130,190,250,310,370,430,490,530],
    ys: [30,110,170,230,290,350,410,470,530,590],
    way: 'l',

    draw:function (pos) {
        if (isGame){
            if (this.way == 'l'){
                var name = "pac_left_"+pos;
                spriteManager.drawSprite(ctx,name,this.x-15,this.y-15);
            }
            if (this.way == 'r'){
                var name = "pac_right_"+pos;
                spriteManager.drawSprite(ctx,name,this.x-15,this.y-15);
            }
            if (this.way == 'u'){
                var name = "pac_up_"+pos;
                spriteManager.drawSprite(ctx,name,this.x-15,this.y-15);
            }
            if (this.way == 'd'){
                var name = "pac_down_"+pos;
                spriteManager.drawSprite(ctx,name,this.x-15,this.y-15);
            }
        }
        else{
            spriteManager.drawSprite(ctx,"pac_left_2",this.x - 15, this.y - 15);
        }
    },

    move: function () {
        if (isKeyDown('LEFT')) {
            isGame = true;
            document.getElementById("temp").innerText = "";
            var l = 0;
            for (var i in partition.nodes) {
                var enemy = partition.nodes[i];
                if (isCollision(this.x-10-this.speed, this.y-5, 20, 10, enemy.x,enemy.y,enemy.w,enemy.h)) {
                    l = 1;
                }
            }
            if (!l) {
                this.move_x = -1;
                this.move_y = 0;
                var d = 900;
                var d1 = this.ys[0];
                for (var j in this.ys){
                    if (Math.abs(this.ys[j] - this.y) < d){
                        d = Math.abs(this.ys[j] - this.y);
                        d1 = this.ys[j];
                    }
                }
                this.y = d1;
            }
        }
            if (isKeyDown('RIGHT')) {
                isGame = true;
                document.getElementById("temp").innerText = "";
                l = 0;
                for (i in partition.nodes) {
                    enemy = partition.nodes[i];
                    if (isCollision(this.x, this.y-5, 10+this.speed, 10, enemy.x,enemy.y,enemy.w,enemy.h)) {
                        l = 1;
                    }
                }
                if (!l) {
                    this.move_x = 1;
                    this.move_y = 0;
                    d = 900;
                    d1 = this.ys[0];
                    for (j in this.ys){
                        if (Math.abs(this.ys[j] - this.y) < d){
                            d = Math.abs(this.ys[j] - this.y);
                            d1 = this.ys[j];
                        }
                    }
                    this.y = d1;
                }
            }
            if (isKeyDown('DOWN')) {
                isGame = true;
                document.getElementById("temp").innerText = "";
                l = 0;
                for (i in partition.nodes) {
                    enemy = partition.nodes[i];
                    if (isCollision(this.x-5, this.y, 10, 10+this.speed, enemy.x,enemy.y,enemy.w,enemy.h)) {
                        l = 1;
                    }
                }
                if (!l) {
                    this.move_x = 0;
                    this.move_y = 1;
                    d = 900;
                    d1 = this.xs[0];
                    for (j in this.xs){
                        if (Math.abs(this.xs[j] - this.x) < d){
                            d = Math.abs(this.xs[j] - this.x);
                            d1 = this.xs[j];
                        }
                    }
                    this.x = d1;
                }
            }

            if (isKeyDown('UP')) {
                isGame = true;
                document.getElementById("temp").innerText = "";
                l = 0;
                for (i in partition.nodes) {
                    enemy = partition.nodes[i];
                    if (isCollision(this.x - 5, this.y - 10 - this.speed, 10, 10, enemy.x, enemy.y, enemy.w, enemy.h)) {
                        l = 1;
                    }
                }
                if (!l) {
                    this.move_x = 0;
                    this.move_y = -1;
                    d = 900;
                    d1 = this.xs[0];
                    for (j in this.xs){
                        if (Math.abs(this.xs[j] - this.x) < d){
                            d = Math.abs(this.xs[j] - this.x);
                            d1 = this.xs[j];
                        }
                    }
                    this.x = d1;
                }
            }
            if (isGame){
                this.x += this.speed * this.move_x;
                this.y += this.speed * this.move_y;
            }

        if (this.move_x == 1) this.way = 'r';
        if (this.move_x == -1) this.way = 'l';
        if (this.move_y == 1) this.way = 'd';
        if (this.move_y == -1) this.way = 'u';
        if (this.x < -15){
            this.x = 580;
        }
        if (this.x > 580){
            this.x = -15;
        }
    },

    collisionPart: function()
    {
        for(var i in partition.nodes) {
            var enemy=partition.nodes[i];
            if (this.move_x == -1){
                if(isCollision(this.x-10-this.speed, this.y-5, 20, 10, enemy.x,enemy.y,enemy.w,enemy.h))
                { // столкновение
                    this.x = enemy.x+enemy.w+10;
                    this.move_y = 0;
                    this.move_x = 0;
                }
            }
            if (this.move_x == 1){
                if(isCollision(this.x, this.y-5, 10+this.speed, 10, enemy.x,enemy.y,enemy.w,enemy.h))
                { // столкновение
                    this.x = enemy.x - 10;
                    this.move_y = 0;
                    this.move_x = 0;
                }
            }
            if (this.move_y == -1){
                if(isCollision(this.x-5, this.y-10-this.speed, 10, 10, enemy.x,enemy.y,enemy.w,enemy.h))
                { // столкновение
                    this.y = enemy.y + enemy.h + 10;
                    this.move_y = 0;
                    this.move_x = 0;
                }
            }
            if (this.move_y == 1){
                if(isCollision(this.x-5, this.y, 10, 10+this.speed, enemy.x,enemy.y,enemy.w,enemy.h))
                { // столкновение
                    this.y = enemy.y - 10;
                    this.move_y = 0;
                    this.move_x = 0;
                }
            }
        }
    },

    collisionPoint: function () {
        for (var i in point.nodes){
            if (isCollision(this.x-this.radius, this.y-this.radius,30,30,point.nodes[i].x-2,point.nodes[i].y-2,4,4)){
                point.destroy(i);
            }
        }
    },

    collisionGhost: function () {
        if ((isCollision(this.x - 15,this.y - 15,30,30,ghost.x,ghost.y,ghost.width,ghost.height)) || (isCollision(this.x - 15,this.y - 15,30,30,ghost1.x,ghost1.y,ghost1.w,ghost1.h))){
            this.lives--;
            soundPlay('/work/death.wav');
            document.getElementById("lives").innerText = this.lives.toString();
            this.init(280,470,15,'yellow','l');
            isGame = false;
            ghost.init(260,220,20,20);
            ghost1.init(420,280,20,20);
            if (this.lives > 0)
                document.getElementById("temp").innerText = "Press any key to continue";
            else{
                document.getElementById("temp").innerText = "You lost\nTo try again press any key";
                soundPlay('/work/failed.mp3');
                this.lives = 3;
                this.score = 0;
                document.getElementById("lives").innerText = this.lives.toString();
                document.getElementById("info").innerText = this.score.toString();
                point.nodes = [];
                point.generate();
            }
        }
    },

    init: function (x,y,r,color, way) {
        this.x = x;
        this.y = y;
        this.radius = r;
        this.color = color;
        this.way = way;
    }
    /*init: function (x,y,w,h,color) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.color = color;
    }*/

};