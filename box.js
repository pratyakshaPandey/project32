class box{
constructor(x,y,width,height){
    var options = {
      isStatic:false,
      'restitution':1,
      'friction':1.0,
      'density':1.0
    }
  //  this.body = Constraint.create(options);
  this.Visiblity = 255;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
   
}
display(){
  if(this.body.speed < 3){
    var pos =this.body.position;
    var angle = this.body.angle ;
    push ();
    //translate (pos.x,pos.y);
    //rotate (angle);
  fill ("blue")
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
  pop ();
  }else{
    World.remove(world,this.body);
    push();
    this.Visiblity = this.Visiblity-5;
    pop();
  }
}
score(){
  if(this.Visiblity<0 &&this.Visiblity >- 105 ){
 score++
  }
}

}