abstract class GameObject {

    public div:HTMLElement;
    public x:number;
    public y:number;
    public width:number;
    public height:number;

   constructor(tag:string, elm:HTMLElement, x:number, y:number, width:number, height:number){
        this.div = document.createElement(tag);
        elm.appendChild(this.div);
        this.div.style.width = width+"px";
        this.div.style.height = height+"px";

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.draw();
   }

    draw():void{
        this.div.style.transform ="translate(" + this.x + "px," + this.y + "px)";
    }
}