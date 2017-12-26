// Configs.
let lastInVehicle = false;

// Creating browser.
let mainBrowser = mp.browsers.new('package://speedo/index.html');
mp.game.graphics.notify("Browser created.");

global.renderFailed = false;

let lastTick = Date.now();

let speedoRender = () => {
	if(mainBrowser
		&& lastTick + 15 < Date.now()) {
			lastTick = Date.now();
		try {
			let vehicle = mp.players.local.vehicle;
			
			if(vehicle) {
				if(!mainBrowser.active)
					mainBrowser.active = true;
				
				mainBrowser.execute(`try { updateSpeed(${vehicle.getSpeed()*3.6}); updateGear(${vehicle.gear}); updateHealth(${vehicle.getBodyHealth()}); updateRpm(${vehicle.rpm*10}); } catch(e) { alert(e.message);  }`);			
			}
			else if(mainBrowser.active)
			{
				mainBrowser.active = false;
			}
		} catch (error) {
			if(!global.renderFailed)
			{
				global.renderFailed = true;
				mp.gui.outputChatBox(error.message);
			}
		}
	}
};

mp.events.add("browserDomReady", (browser) =>
{
	if(mainBrowser == browser)
	{
		mp.events.add("render", speedoRender);
	}
});

/*
API.onUpdate.connect(function() {
	var player = API.getLocalPlayer();
	var inVeh = API.isPlayerInAnyVehicle(player);

	if (mainBrowser != null)
	{
		if (inVeh) {
			var car = API.getPlayerVehicle(player);
			var health = API.getVehicleHealth(car);
			var rpm = API.getVehicleRPM(car);
			var velocity = API.getEntityVelocity(car);
			var speed = Math.sqrt(
				velocity.X * velocity.X +
				velocity.Y * velocity.Y +
				velocity.Z * velocity.Z
				);

			mainBrowser.call("updateSpeed", speed * 3.6); // from m/s to km/h
			mainBrowser.call("updateHealth", health);
			mainBrowser.call("updateRpm", rpm * 10);
		}


		if (inVeh && !lastInVehicle) {
			API.setCefBrowserHeadless(mainBrowser, false);
		}
		if (!inVeh && lastInVehicle) {
			API.setCefBrowserHeadless(mainBrowser, true);
		}

	}
	
	lastInVehicle = inVeh;
});
*/