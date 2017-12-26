mp.events.add(
{
	"LOGIN_STATUS": (data,code) =>
	{	
		loginData = JSON.stringify({data:data,code:code});
		
	  cefEmit(clientSideEvent.LOGIN_STATUS,data,code);
	},
	"UPPER_TEXT": (text,uid) =>
	{
		flashDraw.addText(text,uid);
	},
	"VEH_ENTER":(status) =>
	{
mp.game.graphics.notify("VEH_ENTER "+status);
		if(status == 1)
			globalInfo.currentVehicle = true;
		else
			globalInfo.currentVehicle = null;

		cefEmit(clientSideEvent.VEH_ENTER,status);
	}
})