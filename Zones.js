
class Zones{

    constructor(){
        this.map = {
            "0":this.grooveDraw.bind(this)
        }
        this.zonesData = {
            "GROOVE":{items:450}
        }
    }

   /* map(){
        return {
             "0":this.grooveDraw.call(this)
        } 
    }*/

     _draw_text(text,font,r,g,b,a,scale,pos,plpos){
		 
        var dist = mp.game.gameplay.getDistanceBetweenCoords(plpos.x,plpos.y,plpos.z,pos[0],pos[1],pos[2],true).toFixed(1);
        if(dist>30)
            return;
        var s = 2.0/dist;
        if(s>=0.5)
        s = 0.5;
        mp.game.graphics.drawText(text, font, [r, g, b, a], s, pos[0],pos[1],pos[2]);
    }

    grooveDraw(){

         //let pos = mp.players.at(0).getCoords(true);
		 let pos = globalInfo.gameplayCam.getCoord();
         this._draw_text(`СКЛАД\nПРЕДМЕТОВ: ${this.zonesData.GROOVE.items} шт.`, 9, 80, 255, 80, 205, 0.4, [117.6,-1950.0,21.8],pos);
        
    }

}

global.Zones = Zones;
