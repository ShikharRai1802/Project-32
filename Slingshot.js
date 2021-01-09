class SlingShot{
    constructor(body1, point){
        var options = {
            bodyA: body1,
            pointB: point,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = point
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        
        if(this.sling.bodyA!==null){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
       
           if(pointA.x<220){
           line(230,50,pointA.x-20,pointA.y);
           line(180,53,pointA.x-20,pointA.y);
           image(this.sling3,pointA.x-20,pointA.y-15,15,30);
           }
           else{
           line(230,50,pointA.x+20,pointA.y);
            line(180,53,pointA.x+20,pointA.y);
            image(this.sling3,pointA.x+20,pointA.y-15,15,30);


           }
        }
    }
    
}

