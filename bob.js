class bob{
    constructor(x,y){
        var options={
            isStatic:true,
            friction:0.5,
            restitution:0.3,
            density:1.2

        }
        this.body=Bodies.circle(x,y,10,options)
        this.radius=10;
        World.add(world,this.body)
    }
    display(){
        
        ellipseMode(RADIUS)
        fill("pink")
        ellipse(this.body.position.x,this.body.position.y,10,10)
       
    }
}