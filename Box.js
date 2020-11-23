class Box{

    constructor(x,y, width, height){

var options={isStatic:true}

    
this.Body=Bodies.rectangle(x,y, width, height, options)
this.width=width;
this.height=height;
world.add(world,this.body)

}
display(){
    fill("red")
retctMode("CENTER")
rect(this.body.postion.x,this.body.position.y,this.width, this.height)

}

}