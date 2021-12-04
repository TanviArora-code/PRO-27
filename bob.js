class Bob{
    constructor(x,y){
        var options = {
            isStatic: true
            

        }
    this.body = Bodies.circle(x,y,20,options)
    World.add(world,this.body);
    this.radius = 50
    }
    display(){
        ellipseMode(RADIUS);
        var position = this.body.position;
        ellipse(position.x, position.y, this.radius, this.radius);

    }
}