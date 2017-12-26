class FlashDraw{
    constructor(){
        this.drawList = new Array();
    }


    addText(str,id){

        for(var b in this.drawList){
                if(this.drawList[b].id == id)
                    this.drawList.splice(b,1);

        }

        if(str.length > 30)
           str = str.substr(0,30)+"..";
        
        this.drawList.push({text:str,id:id,startTime:(new Date().getTime()/50)});

    }


    worker(){
        for(var i in this.drawList){
            var pos = mp.players.at(this.drawList[i].id).getCoords(true);
             var offset = parseInt(new Date().getTime()/50)-parseInt(this.drawList[i].startTime);
             var alpha = 255-offset;
            mp.game.graphics.drawText(this.drawList[i].text, 15, [130,177,236,alpha], 0.35, pos.x,pos.y,pos.z+1.4);
           
            if(offset>=100){
                this.drawList.splice(i,1);
            }
        }
    }
}
global.FlashDraw = FlashDraw;