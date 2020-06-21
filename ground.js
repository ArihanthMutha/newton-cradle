class Ground{
    constructor(){
        var options={
            isStatic:true,
            

        }
        this.body=Bodies.rectangle(200,50,200,20,options)
        
        World.add(world,this.body)
    }
    display(){
        fill ("brown")
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,200,20)
        
    }
}