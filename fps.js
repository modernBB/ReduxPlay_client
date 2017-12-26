/*
	thx to N1ks
*/
let nextShow = Date.now();
let swapPoint = Date.now();
let currentPoint = swapPoint;

let delta = 0.0;

let fps = 0;
mp.events.add("render", () =>
{

	delta = Date.now()-currentPoint;


	if((Date.now()-nextShow) > 500)
	{
		fps = parseInt(1000/delta);
		nextShow =Date.now()+500;
	}

	mp.game.graphics.drawText("FPS: " + fps, 8, [255, 255,255, 255], 0.35, 0.95, 0.02);
		currentPoint = Date.now();
});