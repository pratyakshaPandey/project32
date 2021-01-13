class Polygon{
    constructor(x,y,width,height){
        var options = {
           isStatic:false,
            'restitution':0.1,
            'friction':1.0,
            'density':1.0
        }
         
   this.body = Bodies.rectangle(x,y,width,height,options);
   this.width = width;
   this.height = height;
   World.add(world,this.body);
   this.image = loadImage("polygon.png")
    }
    display(){
        var pos = this.body.position
        push ();
        rectMode(CENTER)
        imageMode (CENTER)
        image(this.image,pos.x,pos.y,40,40);
        pop ();
    }
}