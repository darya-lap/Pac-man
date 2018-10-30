var game = function () {
    mapManager.draw(ctx);

    point.draw();

    player.collisionPart();
    player.collisionPoint();
    player.collisionGhost();
    player.draw(pos);
    l++;
    if (l == 5){
        l = 0;
        pos++;
        if (pos == 2) pos = 3;
        if (pos == 4) pos = 1;
    }

    player.move();
    ghost.draw();
    ghost.move();
    ghost1.draw();
    ghost1.move();

};