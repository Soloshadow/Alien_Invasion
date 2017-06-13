/// <reference path="gameobject.ts"/>

class Bullets extends GameObject{

    public bulletSpeed: number;
    

    constructor(x: number, y: number, s:number){
        super("bullets", document.getElementById("container"), x, y, 5, 10);

        this.x = x;
        this.y = y;
        this.width = 5;
        this.height = 10;
        this.bulletSpeed = s;
           
    }

    update(){
        this.y += 1 * this.bulletSpeed;
    }
}