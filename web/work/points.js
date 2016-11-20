var point = {
    nodes :[],

    add: function(x,y,r,c){
        var tmp = new _Enemy1(x,y,r,c);
        this.nodes.push(tmp);
    },

    generate : function () {
        var c = 'white';
        var r = 2;
        //horizontal
        x = 30;
        for (var i = 0; i < 24; i++){
            this.add(x,30,r,c);
            if (x == 250) x += 60;
            else x += 20;
        }
        x = 30;
        for (var i = 0; i < 26; i++){
            this.add(x,110,r,c);
            x += 20;
        }
        x = 30;
        for (var i = 0; i < 20; i++){
            this.add(x,170,r,c);
            if ((i == 5) || (i == 9) || (i == 13)) x += 60;
            else x += 20;
        }
        x = 30;
        for (var i = 0; i < 24; i++){
            this.add(x,410,r,c);
            if (i == 11) x += 60;
            else x += 20;
        }
        x = 30;
        for (var i = 0; i < 20; i++){
            this.add(x,470,r,c);
            if ((i == 2) || (i == 16) || (i == 9)) x += 60;
            else x += 20;
        }
        x = 30;
        for (var i = 0; i < 20; i++){
            this.add(x,530,r,c);
            if ((i == 5) || (i == 9) || (i == 13)) x += 60;
            else x += 20;
        }
        x = 30;
        for (var i = 0; i < 26; i++){
            this.add(x,590,r,c);
            x += 20;
        }
        //vertical
        y = 50;
        for (var i = 0; i < 9; i++){
            this.add(30,y,r,c);
            this.add(530,y,r,c);
            if (i == 2) y += 40;
            else {
                if (i == 4) y += 280;
                else {
                    if (i == 6) y += 100;
                    else y += 20;
                }
            }
        }
        y = 490;
        for (var i = 0; i < 2; i++){
            this.add(70,y,r,c);
            this.add(490,y,r,c);
            y += 20;
        }
        y = 50;
        for (var i = 0; i < 20; i++){
            this.add(130,y,r,c);
            this.add(430,y,r,c);
            if ((i == 2) || (i == 4) || (i == 15) || (i == 17)) y += 40;
            else y += 20;
        }
        y = 130;
        for (var i = 0; i < 4; i++){
            this.add(190,y,r,c);
            this.add(370,y,r,c);
            if (i == 1) y += 340;
            else y += 20;
        }
        y = 50;
        for (var i = 0; i < 7; i++){
            this.add(250,y,r,c);
            this.add(310,y,r,c);
            if (i == 2) y += 320;
            if (i == 4) y+=100;
            else y += 20;
        }

    },

    draw: function () {
        for (var en in this.nodes){
            this.nodes[en].draw();
        }
    },

    destroy: function (id) {
        this.nodes.splice(id,1);
        player.score += 1;
        console.log(player.score);
        document.getElementById("info").innerText = player.score.toString();
        soundPlay('/work/chomp.wav');
        if (player.score == 244){
            document.getElementById("temp").innerText = "You won!\nTo play again press key";
            soundPlay('/work/win.mp3');
            player.lives = 3;
            player.score = 0;
            document.getElementById("lives").innerText = "0";
            document.getElementById("info").innerText = "0";
            point.nodes = [];
            point.generate();
            player.init(280,470,15,'yellow','l');
            isGame = false;
            ghost.init(260,220,20,20);
            ghost1.init(420,280,20,20);
        }
    }
};

var _Enemy1 = function (x, y, r, color){
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
};

_Enemy1.prototype.draw = function () {
    drawCircle(this.x,this.y,this.r,this.color);
};