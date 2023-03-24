class Box 
{ 
    constructor(x, y, w, h)
    { 
        var options= { isStatic: true, stiffness: 2 } 
        this.body = Bodies.rectangle(x, y, w, h, options);

 this.w = w;
  this.h = h;
 World.add(world, this.body);
 } show(){ var pos = this.body.position;
     rectMode(CENTER);
      rect(pos.x, pos.y, this.w, this.h);
     } }