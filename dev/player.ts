/// <reference path="gameobject.ts"/>

class Player extends GameObject implements ShipsInterface{

    hp: number;
    
    constructor(){
        super("player",document.getElementById("container"),400,540,50,50);
        this.hp = 3;
    }

    move(){

    }

    shoot(){

    }

    

}