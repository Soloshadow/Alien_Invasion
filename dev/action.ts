namespace Action {
    export class MoveLeft implements PlayerState{
        player: Player;

        constructor(p:Player){
            this.player = p;
        }

        //player move to the left
        action(){
            if(this.player.x >= 0){
                this.player.x -= this.player.speed;
            }
        }
    }

    export class MoveRight implements PlayerState{
        player: Player;

        constructor(p:Player){
            this.player = p;
        }

        //player move to the left
        action(){
            if(this.player.x + this.player.width <= 800){
                this.player.x += this.player.speed;
            }
        }
    }


    export class Idle implements PlayerState{
        player: Player;

        constructor(p:Player){
            this.player = p;
        }

        //player doesn't move
        action(){
            
        }
    }

    export class Attack implements PlayerState{
        player:Player;
        bullets: Bullets;


        constructor(c:Player){
            this.player = c;
           
        }

        action(){          
            //create a bullet
            this.player.bullets.push(
                new Bullets(this.player.x + this.player.width/2, this.player.y, this.player.bulletSpeed) 
            )   
            
        }
        
    }
}