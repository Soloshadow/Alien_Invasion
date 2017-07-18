

class Fleets implements Subject{

    public aliens: Array<Enemies> = new Array;
    public observers:Array<Observer> = new Array<Observer>();
    private aliensx: number;
    private aliensy: number;
    

    constructor(s:number){
        this.add_aliens(s);
        console.log(s);
    }

    // move(){
    //     for(let i = 0; i < this.aliens.length; i++){
    //         this.aliens[i].x += this.aliens[i].speed;
    //     }
    // }

    // check how many number of aliens can fit in a row
    public aliens_number(){
        let available_space:number = 800 / 50;
        let alien_numb: number = available_space / 2;
        return alien_numb;
    }

    // check how many rows of aliens could fit on the screen
    public aliens_row(){
        let available_height: number = 400 / 50;
        let rows: number = available_height / 2;
        return rows;
    }

    // add the aliens to the aliens array to create a feet of aliens
    add_aliens(s:number){
        this.aliensx = this.aliens_number();
        this.aliensy = this.aliens_row();

        for (let i = 0; i < this.aliensy; i++){
            for (let n = 0; n < this.aliensx; n++){               
                this.aliens.push(new Enemies(n * 80, 50 +(i * 60), s, this)); 
            }
        }
    }

    public sendNotifications(s:number): void {
        for (let o of this.observers) {
            o.notify(s);
        }
    }

    update(){
        //boolean value to check whether the fleet is at the edge of the screen or not
        let edge:boolean = false;
        //this.move();

        //draw each alien and make it move. Also check if each alien is touching the left side of the screen or right side of the screen edge
        for(let i = 0; i < this.aliens.length; i++){
             this.aliens[i].move();
             this.aliens[i].draw();

             if(this.aliens[i].x + 50 >= 800){
                 edge = true;
             }else if(this.aliens[i].x <= 0){
                 edge = true;
             }
        }
            
            //drop the fleet down and move it to the opposite direction when the fleet touches the edge of the screen
            if(edge){
                 for(let j = 0; j < this.aliens.length; j++){
                 this.aliens[j].shift_down();
                 }     
        }  
    }

    subscribe(o:Observer){
        this.observers.push(o);
    }

    unsubscribe(o:Observer){
        
    }
}