/// <reference path="gameobject.ts"/>
/// <reference path="keys.ts"/>
/// <reference path="action.ts"/>

class Player extends GameObject{

    public state: PlayerState;
    public bullets: Array<Bullets> = new Array();
    public bulletSpeed: number;
    public callback: EventListener;
    public ammo: boolean;
   
    constructor(){
        super("player",document.getElementById("container"),400,540,50,50);

        this.speed = 5;
        this.bulletSpeed = -5;
        this.ammo = true;
       
         //add event listeners for moving and shooting
        this.callback = (e:KeyboardEvent) => this.onKeyDown(e);
        window.addEventListener("keydown", this.callback);
        window.addEventListener("keyup", (e:KeyboardEvent) => this.onKeyUp(e));
        
        this.state = new Action.Idle(this);
    }

     //handle user input for the player
    private onKeyDown(e:KeyboardEvent){
        if(e.keyCode === Keys.LEFT){
            this.state = new Action.MoveLeft(this);
        }
        if(e.keyCode === Keys.RIGHT){
            this.state = new Action.MoveRight(this);
        }
        if(e.keyCode === Keys.SPACE){          
            this.state = new Action.Attack(this);    
        }
    }

    private onKeyUp(e:KeyboardEvent){
        this.state = new Action.Idle(this);
        this.ammo = true;
    }
  
    public update(){
        this.state.action(); 
    }

  
}