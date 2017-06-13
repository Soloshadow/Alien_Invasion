/// <reference path="gameobject.ts"/>

class Enemies extends GameObject{
    public width:number;
    public height:number;
    public hp:number;
    public x:number;
    public y:number;
    public points: number;

    constructor(x:number, y:number, s:number){
        super("enemies",document.getElementById("container"), x, y,50,50);

        this.x = x;
        this.y = y;

        this.width = 50;
        this.height = 50;
        this.hp = 1;

        //how much one alien ship is worth
        this.points = 1;

        //speed is the direction the alien ship will move. Positive = move to right. Negative = move to left
        this.speed = s;
    }

    move(){
        this.x += this.speed;     
    }

   
    //shift the alien down verically and move it to the opposie direction
    shift_down(){
        this.y += 25;
        this.speed *= -1;    
    }
}