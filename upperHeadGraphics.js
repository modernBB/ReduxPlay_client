

function drawHeadGraphics(players){
    	var pos = mp.players.local.getWorldPositionOfBone(mp.players.local.getBoneIndexByName('BONETAG_HEAD'));
		var screen = mp.game.graphics.world3dToScreen2d(pos.x,pos.y,pos.z+0.5);
		if(screen)
		{
            mp.game.graphics.drawText(mp.players.local.name, 9, [255, 255, 255, 255], 0.3, 0.3, true, screen.x,screen.y);
            mp.game.graphics.drawRect(screen.x,screen.y+0.033, 0.08, 0.01, 0,0,0,150);
            mp.game.graphics.drawRect(screen.x,screen.y+0.033, 0.078/100 * mp.players.local.getHealth()/2, 0.0076, 230,230,230,200);
            
            mp.game.graphics.drawRect(screen.x,screen.y+0.0415, 0.08, 0.005, 0,0,0,150);
            mp.game.graphics.drawRect(screen.x,screen.y+0.0415, 0.078, 0.003, 255,150,70,200);

		}
}