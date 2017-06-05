/// <reference path="stage.ts"/>

class Game{
public static instance:Game;
bg1:Stage;
bg2:Stage;


    constructor(){
        this.bg1 = new Stage(0,0);
        //this.bg2 = new Stage(0,-800);

         requestAnimationFrame(()=>this.gameLoop());
    }

    public static getInstance(){
        if(!Game.instance){
            Game.instance = new Game();
        }
        return Game.instance;
    }

    gameLoop(){
        //this.bg1.update();
        this.bg1.draw();
        requestAnimationFrame(()=>this.gameLoop());
    }


}

window.addEventListener("load",function(){
    new Game();
})