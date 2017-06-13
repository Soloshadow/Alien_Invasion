/// <reference path="gameobject.ts"/>

class ScoreBoard extends GameObject{
    public score: number;
    constructor(){
        super("scoreboard",document.getElementById("container"),0,5,150,50);
        this.score = 0;
        document.getElementById("scoreboard").innerHTML = this.score.toString();
    }


}