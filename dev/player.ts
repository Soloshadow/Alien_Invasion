/// <reference path="gameobject.ts"/>

class Player extends GameObject implements ShipsInterface{

    hp: number;
    speed: number;
    private player_width:number;
    private player_height:number;
    private player_x:number;
    private player_y:number;


    
    constructor(){
        super("player",document.getElementById("container"),400,540,50,50);
        this.hp = 3;

        this.player_width = 50;
        this.player_height = 50;

        this.player_x = 400;
        this.player_y = 540;

        this.speed = 5;
    }

    move(){

    }

    shoot(){

    }

    

}