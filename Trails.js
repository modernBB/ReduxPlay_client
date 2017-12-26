class trails{
    constructor(rate,rnd,thickness){
        this.trails = new Array();
        this.rate = rate;
        this.nextTime = 0;
        this.rnd = rnd;
        this.thickness = thickness;
        this.err = 0;
    }

    attachToPlayer(player,color,maxlength,bone){
        this._attach(0,player,color,maxlength,player.getBoneIndexByName(bone));
    }
    attachToVehicle(veh,color,maxlength,bone){
        this._attach(1,veh,color,maxlength,veh.getBoneIndexByName(bone));
    }
    _attach(type,handler,color,maxlength,bone){
        this.trails.push({type:type,color:color,max:maxlength,handler:handler,bone:(bone||0),history:[]});
    }

    render(){
        try
        {
            if(this.trails.length>0)
            {
                for(var i in this.trails)
                {
                    var trail = this.trails[i];
                    if((this.nextTime - getTimeMs(1000)) <=0)
                    {
                        var r = (this.rnd!=0)? (-this.rnd+Math.random()*this.rnd) : 0;
                        var pos;
                        var speed = 0;
                        if(trail.type == 0)
                        {
                            var pl = trail.handler;
                            pos = (trail.bone !=0)? pl.getWorldPositionOfBone(trail.bone) : pl.position;
                            speed = parseInt(pl.getSpeed());

                        }
                        else if(trail.type == 1)
                        {
                            var vh = trail.handler;
                            pos= (trail.bone !=0) ? vh.getWorldPositionOfBone(trail.bone) : vh.position;
                            speed = parseInt(vh.getSpeed());
                        }



                        if(r!=0){ pos.x += r; pos.y += r; pos.z += r; }
                        if(speed != 0.0)
                         trail.history.push(pos);

                        if(trail.history.length > trail.max || speed == 0.0)
                            trail.history.splice(0,1);


                        
                        if(i == this.trails.length-1)
                            this.nextTime = getTimeMs(1000)+this.rate;

                    }


                    var c = (this.thickness)? this.thickness.c: 1;
                    var a = 0;
                    var step;
                    var tempStep = 0;
                    for(var h =0;h< trail.history.length-1;h++){
                        a = ((trail.color[3]|255)/trail.history.length)*h;
                        step = (this.thickness)? ( (this.thickness.t/trail.history.length) * h):0;
                        for(var b = 0;b < c;b++){
                          if(step !=0)
                            tempStep = step*b;
                            mp.game.graphics.drawLine(  trail.history[h].x,
                                                        trail.history[h].y,
                                                        trail.history[h].z + tempStep,
                                                        trail.history[h+1].x,
                                                        trail.history[h+1].y,
                                                        trail.history[h+1].z + tempStep,
                                                        trail.color[0],trail.color[1],trail.color[2],a);
                        }
                    }                    
                }

                
            }
        }
        catch(message){
            mp.game.graphics.notify("Error in Trails: "+message);
            this.err++;
            if(this.err>10)
                this.trails = new Array();
        }
    }
}
global.trails = trails;
