class Paper{
    constructor(x,y,w,h){
    var options = {
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
    }

    this.width = w;
    this.height = h; 

    this.body = Bodies.rectangle(x,y,w,h,options);
    World.add(world,this.body);
    this.image = loadImage("project-30-main/polygon.png")
    
    }
    display(){
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
    }
    }