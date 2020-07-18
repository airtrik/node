var airtrik = require("airtrik")

client = airtrik.connect("__APP_KEY__")

client.on('connect', ()=>{
	client.subscribe("bulb")
	console.log("Connected")
	client.send("__DEVICE_ID__", "__MESSAGE__")
})

client.on('receive', (message, deviceId)=>{
	console.log(message, deviceId)
})