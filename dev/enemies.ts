/// <reference path="gameobject.ts"/>

class Enemies extends GameObject implements ShipsInterface{
    width:number;
    height:number;
    hp:number;
    x:number;
    y:number;
   

    constructor(x:number, y:number){
        super("enemies",document.getElementById("container"), x, y,50,50);

        this.x = x;
        this.y = y;

        this.width = 50;
        this.height = 50;
        this.hp = 1;

        //speed is the direction the alien ship will move. Positive = move to right. Negative = move to left
        this.speed = 1;
        
    }

    move(){
        this.x += this.speed;     
    }


    shoot(){

    }

    //shift the alien down verically and move it to the opposie direction
    shift_down(){
        this.y += 25;
        this.speed *= -1;
        
    }
}