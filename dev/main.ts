/// <reference path="stage.ts"/>

class Game{
public static instance:Game;
bg1:Stage;
bg2:Stage;
player: Player;
fleet: Fleets;

    constructor(){
        //make 2 map so that it is will generate an infinite background loop
        this.bg1 = new Stage(0,0);
        this.bg2 = new Stage(0,-599);

        this.player = new Player();
        this.fleet = new Fleets();
    
        requestAnimationFrame(()=>this.gameLoop());
    }

    //singelton of the game instance
    public static getInstance(){
        if(!Game.instance){
            Game.instance = new Game();
        }
        return Game.instance;
    }

    gameLoop(){
        this.bg1.update();
        this.bg2.update();
        this.fleet.update();
        requestAnimationFrame(()=>this.gameLoop());
    }


}

window.addEventListener("load",function(){
    new Game();
})