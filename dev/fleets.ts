

class Fleets{

    aliens: Array<Enemies> = new Array;
    aliensx: number;
    aliensy: number;
    

    constructor(){
        this.add_aliens();
        
    }

    public aliens_number(){
        let available_space:number = 800 / 50;
        let alien_numb: number = available_space / 2;
        return alien_numb;
    }

    public aliens_row(){
        let available_height: number = 400 / 50;
        let rows: number = available_height / 2;
        return rows;
    }

    add_aliens(){
        this.aliensx = this.aliens_number();
        this.aliensy = this.aliens_row();

        for (let i = 0; i < this.aliensy; i++){
            for (let n = 0; n < this.aliensx; n++){
                this.aliens.push(new Enemies(n * 80, i * 60));
            }
        }
    }

    update(){
        let edge:boolean = false;

        for(let i = 0; i < this.aliens.length; i++){
             this.aliens[i].move();
             this.aliens[i].draw();

             if(this.aliens[i].x + 50 >= 800){
                 edge = true;
             }else if(this.aliens[i].x <= 0){
                 edge = true;
             }

            
            }
            
            if(edge){
                 for(let j = 0; j < this.aliens.length; j++){
                 this.aliens[j].shift_down();
                 }

            //  if(this.aliens[i].y + 50 >= 600){
            //      console.log("game over");
            //  }
        
        }

        
          
        
 
    }

   



   

}