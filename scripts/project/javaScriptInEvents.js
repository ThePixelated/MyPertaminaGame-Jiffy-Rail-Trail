

const scriptsInEvents = {

	async Ev_game_Event8_Act5(runtime, localVars)
	{
		console.log("Sending leaderboard postMessage");
		window.parent.postMessage({ type: "IFRAME_BUTTON_CLICKED", value: "ok" }, "*");
		
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
