/// <reference path="stage.ts"/>

class Game{
public static instance:Game;
private bg1: Stage;
private bg2: Stage;
private player: Player;
private fleet: Fleets;
private gamespeed: number;
private score: number;
private mulitplier: number;
private gameobject:Array<GameObject> = new Array<GameObject>();

    constructor(){
        //set the speed of of the alien fleet
        this.gamespeed = 1;
        this.score = 0;
        this.mulitplier = 1;

        //make 2 map so that it is will generate an infinite background loop
        this.bg1 = new Stage(0,0);
        this.bg2 = new Stage(0,-599);

        this.player = new Player();
        this.fleet = new Fleets(this.gamespeed);

        this.gameobject.push(this.bg1, this.bg2, this.player);

        requestAnimationFrame(()=>this.gameLoop());
    }

    //singelton of the game instance
    public static getInstance(){
        if(!Game.instance){
            Game.instance = new Game();
        }
        return Game.instance;
    }

    gameLoop(){
        //check if player is dead
        let dead = false;

        for(let g of this.gameobject){
            g.update();
            g.draw();
        }

        this.fleet.update();
        
        //update bullets
        for(let i = 0; i < this.player.bullets.length; i++){
            this.player.bullets[i].update();
            this.player.bullets[i].draw();

             //check if bullet is out of the screen
            if(this.player.bullets[i].y < -10){
                //remove the bullet
                this.player.bullets[i].div.remove();
                let s : number = this.player.bullets.indexOf(this.player.bullets[i]);
                if(i != -1){
                    this.player.bullets.splice(s,1);
                }
            }

            //check if alien reaches bottom of screen
            for(let j = 0; j < this.fleet.aliens.length; j++){
                if(this.fleet.aliens[j].y + this.fleet.aliens[j].height >= 600){
                    dead = true;
                    let endDiv = document.getElementById("gameover");
                    endDiv.innerHTML = "Game Over<br>Score: "+ Math.round(this.score) + "<br>Refresh page to restart ";
                    TweenLite.to(endDiv, 3, {x:0,y:100, ease:Bounce.easeOut });
                }
            }

            //check for bullet and alien collision
            for(let n = 0; n < this.fleet.aliens.length; n++){
                let obj1 = this.player.bullets[i];
                let obj2 = this.fleet.aliens[n];

                //check if the bullet still exists
                if (obj1 != null && obj2 != null){
                    if (Util.checkCollision(obj1,obj2)){
                        this.fleet.aliens[n].hp -= 1;

                        //fleet send notification to aliens to move faster
                        this.fleet.sendNotifications(1.001);

                        //remove the alien
                        if(this.fleet.aliens[n].hp < 1){
                            //update score each time an alien is shot down
                            this.score += (this.fleet.aliens[n].points * this.mulitplier);
                            let scoreDiv = document.getElementById("score");
                            scoreDiv.innerHTML = "Score: " + Math.round(this.score);

                            //multiply alien worth each time an alien is shot down
                            this.mulitplier *= 1.1;

                            // for(let j = 0; j < this.fleet.aliens.length; j++){
                            //     this.fleet.aliens[j].notify(1.1);
                            // }

                            //remove the alien out of array when it is shot down
                            this.fleet.aliens[n].div.remove();                            
                            let e : number = this.fleet.aliens.indexOf(this.fleet.aliens[n]);
                            if(i != -1){
                                this.fleet.aliens.splice(e,1);
                            }
                        
                        }

                        //remove the bullet
                        this.player.bullets[i].div.remove();
                        let s : number = this.player.bullets.indexOf(this.player.bullets[i]);
                        if(i != -1){
                            this.player.bullets.splice(s,1);
                        }
                    }

                }
            }
        }

        //check for player - alien collision
        for(let i = 0; i < this.fleet.aliens.length; i++){
            let obj1 = this.player;
            let obj2 = this.fleet.aliens[i];

            if(Util.checkCollision(obj1,obj2)){
                dead = true;
                let endDiv = document.getElementById("gameover");
                endDiv.innerHTML = "Game Over<br>Score: "+ Math.round(this.score) + "<br>Refresh page to restart ";
                TweenLite.to(endDiv, 3, {x:0,y:100, ease:Bounce.easeOut });
            }
        }

        //create a new fleet and increase fleet speed
        if(this.fleet.aliens.length == 0){
            this.gamespeed *= 1.1;
            this.fleet = new Fleets(this.gamespeed);   
        }

       if(!dead) {
           requestAnimationFrame(() => this.gameLoop());
       }
    }

}

window.addEventListener("load",function(){
    let btn = document.getElementById("start");
    TweenLite.to(btn, 3, {x:0,y:300, ease:Bounce.easeOut})

    btn.addEventListener("click", function(){
        Game.getInstance();
        btn.remove();
    })
    
})