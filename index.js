require('enums/clientSideEvents.js');


require('Utils.js');


var config = {colshapedebug:true,homedebug:false};
global.loginData = null;

global.globalInfo = {
	myPos:{x:0,y:0,z:0},
	myRot:{x:0,y:0,z:0},
	camPos:{x:0,y:0,z:0},
	camRot:{x:0,y:0,z:0},
	activeControl:true,
	gameplayCam:null,
	currentVehicle:null,
	invisible:false
}

var AuthData = require('AuthData.js');
var HASHES = require('Hashes.js');
var camera = require('camera.js');
var renderColshapes = require('ColshapeDebug.js');
var Vehicle = require('Vehicle.js');

require('FlashDraw.js');
require('PosInfo.js');
require('Zones.js');

require('ServerCalls.js');
require('CefEvents.js');
require('upperHeadGraphics.js');
require('Trails.js');
//require('flycam.js');
require('fps.js');
//require('ray.js');

var Trails = new trails(0.01,0);
var flashDraw = new FlashDraw();

var currentZone = 0;
var P_ZONES = new Zones();

global.globalInfo.gameplayCam = mp.cameras.new("gameplay");		

mp.players.local.setCoordsNoOffset(positions.cam.background.pos.x, positions.cam.background.pos.y, positions.cam.background.pos.z, false, false, false);

mp.events.add(
{
	"guiStarted": () =>
	{
		mp.gui.execute("window.location = 'http://localhost:8080/';");
		mp.nametags.enabled = false;
	},
	"render":(tags)=>{
		
		
		globalInfo.camPos = globalInfo.gameplayCam.getCoord();
		globalInfo.camRot = globalInfo.gameplayCam.getRot(2);
		globalInfo.myPos = mp.players.at(0).getCoords(true);


		//mp.game.cam.setGameplayCamRelativePitch(0.0,1);
		//mp.game.cam.setGameplayCamRelativeHeading(0.0);

		/*if(playerConfig.invisible)
		{
			localPlayer.setInvincible(false);
			localPlayer.freezePosition(true);
			localPlayer.setAlpha(255);	
		}*/

		globalInfo.myPos = mp.players.at(0).getCoords(true);
		/*if(mp.players.local.vehicle){
			mp.game.graphics.notify("speed "+ mp.players.local.vehicle.getSpeed());
		}*/
		if(global.globalInfo.currentVehicle == true){
			
			cefEmit(clientSideEvent.VEH_UPD_PANEL,parseInt(mp.players.local.vehicle.getSpeed() * 2.3),mp.players.local.vehicle.rpm);
		}
		
		
		
		let rot = mp.players.at(0).getRotation(2);
		if(globalInfo.gameplayCam){
		var n = {x:Math.sin(globalInfo.camRot.x),y:Math.cos(globalInfo.camRot.y),z:0};
		
		//raycast({x:parseFloat(globalInfo.myPos.x),y:parseFloat(globalInfo.myPos.y),z:parseFloat(globalInfo.myPos.z+1.0)},{x:parseFloat(globalInfo.myPos.x+2.0),y:parseFloat(globalInfo.myPos.y),z:parseFloat(globalInfo.myPos.z)},null);
		}
		//if(!activeControl)
		//	mp.game.controls.disableAllControlActions(0);

		drawHeadGraphics(null);

		if(config.colshapedebug)
			renderColshapes();

 			
	/*	 mp.game.graphics.drawText(`CAMPOS ~r~X:[${campos.x.toFixed(1)}],~g~Y:[${campos.y.toFixed(1)}],~b~Z:[${campos.z.toFixed(1)}]`, 8, [255, 255, 255, 255], 0.4, 0.25,0.8);
		  mp.game.graphics.drawText(`CAMROT ~r~X:[${camrot.x.toFixed(1)}],~g~Y:[${camrot.y.toFixed(1)}],~b~Z:[${camrot.z.toFixed(1)}]`, 8, [255, 255, 255, 255], 0.4, 0.25,0.83);
        mp.game.graphics.drawText(`POS ~r~X:[${playerLocalPosition.x.toFixed(1)}],~g~Y:[${playerLocalPosition.y.toFixed(1)}],~b~Z:[${playerLocalPosition.z.toFixed(1)}]`, 8, [255, 255, 255, 255], 0.4, 0.25,0.9);
		mp.game.graphics.drawText(`ROT ~b~Z:[${rot.z.toFixed(1)}]`, 8, [255, 255, 255, 255], 0.4, 0.25,0.95);
*/
		P_ZONES.map[currentZone]();


		 Trails.render();
		 flashDraw.worker();
		

		
	}
});
