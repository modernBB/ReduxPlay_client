mp.events.add(
{
	"auth_verif": (log,pass) =>
	{
		mp.events.callRemote("auth_verif",log,pass);
	},
	"notify":(text)=>
	{
 		mp.game.graphics.notify(text);
	},
	"eval":(src)=>
	{
		mp.game.graphics.notify(JSON.stringify(eval(src)));
	},
	"playerJoin": () =>
	{	
		if(loginData !=null){
			mp.gui.execute("window.loginLocal("+loginData+");");
			return;
		}
		mp.gui.execute("window.autolog();");
	}
})

  