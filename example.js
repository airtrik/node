var airtrik = require("airtrik")

client = airtrik.connect("__APP_KEY__")

client.on('connect', ()=>{
	client.subscribe("bulb")
	console.log("Connected")
	client.send("bulb", "handshake")
})

client.on('receive', (msg, deviceId)=>{
	console.log(msg, deviceId)
})