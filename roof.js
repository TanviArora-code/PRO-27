class Roof{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
            

        }
    this.body = Bodies.rectangle(x,y,width,height,options)
    World.add(world,this.body);
    this.width = width
    this.height = height
    }
    display(){
        rectMode(CENTER);
        var position = this.body.position;
        rect(position.x, position.y, this.width, this.height);
        

    }
}