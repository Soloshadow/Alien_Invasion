/// <reference path="gameobject.ts"/>

class Bullets extends GameObject{

    public bulletSpeed: number;
    

    constructor(x: number, y: number){
        super("bullets", document.getElementById("container"), x, y, 5, 10);

        this.x = x;
        this.y = y;

        this.bulletSpeed = 5;
        
    }

    update(){
        this.y += this.bulletSpeed;
    }
}