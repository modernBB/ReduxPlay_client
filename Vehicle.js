class Vehicle{
    constructor(){
        this.id = -1;
        this.name = "";
        this.fuel = 0;
        this.doorsLocked = false;
        this.light = false;
        
    }
    set(id,name,fuel,doorsLocked,light){

    }

    debugDraw(){
         var poss =  mp.vehicles.at(this.id).position;
		 var dist = mp.game.gameplay.getDistanceBetweenCoords(playerLocalPosition.x,playerLocalPosition.y,playerLocalPosition.z, campos.x, campos.y, campos.z,true).toFixed(1);

			 if(dist<=30.0)
			 {
				let s = 2.0/dist;
				s = Math.min(Math.max(s, 0.15), 0.4);
				let hp = veh.getHealth();
				let engine = veh.getMaxHealth();
				let health = Math.floor((hp/engine) * 100);
				
				mp.game.graphics.drawText(`Vehid: ~g~${veh.id} \n~w~Distance: ~g~${dist}\n~w~Health: ~g~${health}`, 8, [255, 255, 255, 255], s, s, false, poss.x,poss.y,poss.z+1.5);
			 }
    }

    toInline(){
        return {id:this.id,name:this.name,fuel:this.fuel,doorsLocked:this.doorsLocked,light:this.light};
    }
}
exports = Vehicle;