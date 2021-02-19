class Box {
    constructor(x,y,w,h){
        var b_options = {
            restitution : 1
        }
        this.body = Bodies.rectangle(x,y,w,h,b_options);
        this.w = w;
        this.h = h;
        World.add(world,this.body);
    }
   
    displayBox(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("yellow");
        rect(0,0,this.w, this.h);
        pop();
    }
}