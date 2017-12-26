var d2r = 0.008726646259971648;

function cefEmit(event, ...args){
  let jsonArgs = JSON.stringify([event,...args])
  mp.gui.execute(`window.clientSideEvent.apply(this,${jsonArgs} )`)
}
function drawDebugBox(pos,sizex,sizey,color){
		sizex = sizex/2;
		sizey = sizey/2;
		mp.game.graphics.drawLine(pos.x+sizex,pos.y+sizey,pos.z,pos.x-sizex,pos.y+sizey,pos.z,color[0],color[1],color[2],color[3]);
		mp.game.graphics.drawLine(pos.x-sizex,pos.y+sizey,pos.z,pos.x-sizex,pos.y-sizey,pos.z,color[0],color[1],color[2],color[3]);
		mp.game.graphics.drawLine(pos.x-sizex,pos.y-sizey,pos.z,pos.x+sizex,pos.y-sizey,pos.z,color[0],color[1],color[2],color[3]);
		mp.game.graphics.drawLine(pos.x+sizex,pos.y-sizey,pos.z,pos.x+sizex,pos.y+sizey,pos.z,color[0],color[1],color[2],color[3]);
}

function drawDebugCircle(pos,radius,color,divide){
	for(var i = 0;i<divide;i++)
	{
		var step = (360)/(divide/2);
		var xn = Math.sin((i*step)*d2r)*(radius);
		var yn = Math.cos((i*step)*d2r)*(radius);
		var xn1 = Math.sin(((i+1)*step)*d2r)*(radius);
		var yn1 = Math.cos(((i+1)*step)*d2r)*(radius);
		mp.game.graphics.drawLine(pos.x+xn,pos.y+yn,pos.z,pos.x+xn1,pos.y+yn1,pos.z,color[0],color[1],color[2],color[3]);
	}

}
function getTimeMs(divide){
    return (new Date().getTime()/divide);
}
global.cefEmit = cefEmit;
global.drawDebugBox = drawDebugBox;
global.drawDebugCircle = drawDebugCircle;
global.getTimeMs = getTimeMs;