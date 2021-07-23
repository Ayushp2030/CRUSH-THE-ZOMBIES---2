class Base {
    constructor(x, y, widht, height){
        options={
            isStatic : true
        };
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.widht = widht;
        this.height = height;
        
        World.add(world, this.body);

    }

    display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    pop();

    
  }
}