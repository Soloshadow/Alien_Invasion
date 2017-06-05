
class Stage extends GameObject{
  div:HTMLElement;
 

    constructor(x:number, y:number){
      super("bg",document.getElementById("container"), x, y, 800, 600);   
    }

    update(){
      this.y += 0.5;
      //console.log(this.y);

      if(this.y > 800){
        this.y = -800;
      }
    }

   
}