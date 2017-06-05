
class Stage{
  div:HTMLElement;
  x:number;
  y:number;

    constructor(x:number, y:number){
      this.x = x;
      this.y = y;

      let container: HTMLElement = document.getElementById("container");
      this.div = document.createElement("bg");
      container.appendChild(this.div);
    
      this.div.style.transform = "translate("+this.x+"px,"+this.y+"px)"; 
    }

    update(){
      this.y += 0.5;
      //console.log(this.y);

      if(this.y > 800){
        this.y = -800;
      }
    }

    draw(){
        this.div.style.transform = "translate("+this.x+"px,"+this.y+"px)";
    }
   
}