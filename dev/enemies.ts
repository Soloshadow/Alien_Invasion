/// <reference path="gameobject.ts"/>

class Enemies extends GameObject implements ShipsInterface{
    width:number;
    height:number;
    hp:number;
    x:number;
    y:number
    dir:number;
   

    constructor(x:number, y:number){
        super("enemies",document.getElementById("container"), x, y,50,50);

        this.x = x;
        this.y = y;

        this.width = 50;
        this.height = 50;
        this.hp = 1;

        //dir is the direction the alien ship will move. Positive = move to right. Negative = move to left
        this.dir = 1;
        
    }

    move(){
        this.x += this.dir;
        // if(this.check_edge()){
        //     this.y += 50;
        //     this.dir *= -1;
        // }
    }


    shoot(){

    }

    shift_down(){
        this.y += 25;
        this.dir *= -1;
        
    }

//    check_edge(){
//        if(this.x + 50 >= 800){
//            return true;
//        }else if(this.x <= 0){
//            return true;
//        }
//    }
}