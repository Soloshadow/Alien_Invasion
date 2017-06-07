/// <reference path="gameobject.ts"/>

class Stage extends GameObject{
  div:HTMLElement;
 
    constructor(x:number, y:number){
      super("background",document.getElementById("container"), x, y, 800, 600);   
    }

    update(){
      this.y += 0.5;
     //check to see if the y-coordinate is greater than 600, it wil create a new map on top of the screen
      if(this.y > 600){
        this.y = -599;
      }
    }

   
}