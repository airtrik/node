var airtrik = require("airtrik")

client = airtrik.connect("__APP_KEY__")

client.on('connect', ()=>{
	client.subscribe("__DEVICE_ID__")
	console.log("Connected")
	client.send("__DEVICE_ID__", "__MESSAGE__")
})

client.on('receive', (message, deviceId)=>{
	console.log(message, deviceId)
})

// __APP_KEY__ is optional if client is connected
client.lastmsg("__APP_KEY__").then(res=>console.log(res), err=>console.log(err)) 
