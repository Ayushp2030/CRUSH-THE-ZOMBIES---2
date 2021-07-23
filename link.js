class Link{
constructor(bodyA, bodyB){
   var lastLInk = bodyA.body.bodies.lenght - 2;
   this.link = Constraint.create({
       bodyA : bodyA.body.bodies[lastLInk],
       pointA : {x : 0, y : 0},
       bodyB : bodyB.bodies,
       pointB : {x : 0, y : 0},
       lenght : 10,
       stiffness : 0.8
   });

   World.add(world, this.link);
 }
 
}