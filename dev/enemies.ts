/// <reference path="gameobject.ts"/>

class Enemies extends GameObject implements Observer{
    public width:number;
    public height:number;
    public hp:number;
    public x:number;
    public y:number;
    public points: number;

    constructor(x:number, y:number, s:number, subscribe:Subject){
        super("enemies",document.getElementById("container"), x, y, 50, 50);
        subscribe.subscribe(this);
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

    public notify(s:number){
        this.speed *= s;
        console.log("test");
    }

   
    //shift the alien down verically and move it to the opposie direction
    public shift_down(){
        this.y += 25;
        this.speed *= -1;    
    }
}