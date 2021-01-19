class Mango{

    constructor(x,y,r){
    
    var options = {
    
    isStatic : true,
    restitution : 0,
    friction :1
    
    }
    
    this.r = r;
    this.width = width;
    this.height = height;
    this.image = loadImage("Plucking mangoes/mango.png");
    
    this.body = Bodies.circle(x,y,this.r,options);
       
         
    World.add(world,this.body);
    
    
    }
    
    display(){
    
    var mangopos = this.body.position;
    push()
                translate(mangopos.x, mangopos.y);
                fill(255)
                ellipseMode(CENTER);
                imageMode(CENTER);
                image(this.image,0,0,this.r*2,this.r*2);
                pop()
        
    
    
    }
    
    
    }