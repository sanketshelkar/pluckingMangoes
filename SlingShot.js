class SlingShot {

   constructor(bodyA ,pointB) {

      var option = {

        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.05,
        length:5 

      }

      this.pointB = pointB

      this.sling = Constraint.create(option);

      World.add(world,this.sling)

   }

   display() {

    if (this.sling.bodyA){


        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB
    
    
        strokeWeight(10)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    
      }
      }
      fly(){
    
       this.sling.bodyA = null    

   }

}