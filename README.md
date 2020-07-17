# Airtrik node

Airtrik is an IoT Cloud platform for managing communication between IoT devices and software platforms.
This is the node library that can be used for communicating to IoT device connected to your airtrik app network.

## Summary

  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installing](#installing)
    - [Connecting to your App's Network](#connecting-to-your-Apps-Network)
    - [Subscribe to device in App's Network](#subscribe-to-device-in-Apps-Network)
    - [Sending message to device](#sending-message-to-device)
    - [Receiving messages from device](#receiving-messages-from-device)
  - [Versioning](#versioning)
  - [Authors](#authors)
  - [License](#license)

## Getting Started

Follow the below instructions to get your device and application up and running within minutes. It is very easy to integrate airtrik into your project.

### Prerequisites

Before proceeding further you have would need a node js running on your system install the latest version of nodejs and npm for your platform from here [https://nodejs.org/en/](https://nodejs.org/en/)

### Installing

Airtrik node library can easily be loaded to your project through npm following is the you need to run inside your node project terminal to install airtrik.

```
npm install airtrik
```

### Connecting to your App's Network

```javascript
var airtrik = require("airtrik")

// create an app in the panel to get the app key
client = airtrik.connect("__APP_KEY__")

```
### Subscribe to device in App's Network

```javascript

// you have to create device inside app from panel
var device = __DEVICE_ID__
// you can only subscribe to any device inside the onConnect callback function
client.on('connect', ()=>{
  client.subscribe(device)
})

```

### Sending message to device

```javascript

message = "YOUR MESSAGE TO DEVICE"
client.send(device, message)

```

### Receiving messages from device

```javascript

// you can write your custom function handling the incoming message
client.on('receive', (message, deviceId)=>{
  console.log(message, deviceId)
})

```

## Versioning



## Authors

  - **Vishal Pandey** - *Written Python Library* -
    [vishal-pandey](https://github.com/vishal-pandey)

See also the list of
[contributors](https://github.com/airtrik/node/contributors)
who participated in this project.

## License

This project is licensed under the [MIT](LICENSE)
Creative Commons License - see the [LICENSE](LICENSE) file for
details


