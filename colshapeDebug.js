require('Utils.js');
let colshapeArray = new Array();

function renderColshapes(){
    	for(var i =0;i<colshapeArray.length;i++)
		{
			var color = [255,255,255,255];
				if(colshapeArray[i].enter)
					color = [50,255,50,255];
								var p = colshapeArray[i].pos;
								mp.game.graphics.drawText('COLSHAPE '+colshapeArray[i].id, 8, color, 0.4,0.4, p.x,p.y,p.z);
			if(colshapeArray[i].type == 1)
			{
				drawDebugCircle(colshapeArray[i].pos,colshapeArray[i].r,color,16);

				drawDebugCircle({x:p.x,y:p.y,z:p.z-0.5},colshapeArray[i].r,color,16);
				
				
			}else{
				drawDebugBox({x:p.x,y:p.y,z:p.z},parseFloat(colshapeArray[i].sizex),parseFloat(colshapeArray[i].sizey),color);
				drawDebugBox({x:p.x,y:p.y,z:p.z-0.5},parseFloat(colshapeArray[i].sizex),parseFloat(colshapeArray[i].sizey),color);
			}
		}
}


mp.events.add(
{
	"newColshape":(type,x,y,z,radius,id,size1,size2)=>{
		if(parseInt(type) == 1)
			colshapeArray.push({type:type,pos:new mp.Vector3(x,y,z),id:id,r:radius,enter:false});
		else
			colshapeArray.push({type:type,pos:new mp.Vector3(x,y,z),id:id,enter:false,sizex:size1,sizey:size2});
	},
    "enterColshape":(id)=>{
		for(var i = 0;i<colshapeArray.length;i++){
			if(colshapeArray[i].id == id)
				colshapeArray[i].enter = true;
				
		}
		fc = true;
	},
	"exitColshape":(id)=>{
		for(var i = 0;i<colshapeArray.length;i++){
			if(colshapeArray[i].id == id)
				colshapeArray[i].enter = false;
				
		}
	},
})

exports = renderColshapes;