class Chain{

    constructor(bodyx,bodyy){
        var opt={
            bodyA:bodyx,
            bodyB:bodyy,
            stiffness:0.03,
            length:10
        }

        this.chain=Constraint.create(opt);
        World.add(world,this.chain);
    }

    display(){
        var pos= this.chain.bodyA.position;
        var pos2=this.chain.bodyB.position;

        line(pos.x,pos.y,pos2.x,pos2.y);
    }
}