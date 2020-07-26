var mqtt = require("mqtt");
var request = require('request');
const EventEmitter = require('events');


class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

var KEY = ""
var apiEndPoint = "https://airtrik.com/iot/";
var lastMsgEndPoint = "https://airtrik.com/api/lastmsg/";

var client = null;

function subscribe(deviceId){
  client.subscribe(KEY+"/"+deviceId)
}


function send(deviceId, msg){
  let t = KEY+"/"+deviceId
  client.publish(t, msg)
}


function connect(key){

  KEY = key
  var username = ""
  var password = ""

  request.post(
      apiEndPoint,
      { form: { key: key } },
      function (error, response, body) {
          if (!error && response.statusCode == 200) {
              
              var res = JSON.parse(body)
              username = res.username
              password = res.password

              var options = {
                username: username,
                password: password,
                rejectUnauthorized: false
              }

              client = mqtt.connect("mqtts://airtrik.com:8883/", options)

              client.on('connect', function () {
                myEmitter.emit('connect')
              })
               
              client.on('message', function (topic, message) {
                myEmitter.emit('receive', message.toString(), topic.split("/")[1])
              })
              
          }
      }
  );
  return myEmitter
}


function lastmsg(key=0){
  if(key == 0){
    key = KEY
  }
  let myPromise = new Promise((resolve, reject)=>{
    request.post(
      lastMsgEndPoint,
      { form: { key: key } },
      function (error, response, body) {
        if (!error && response.statusCode == 200) {        
          var res = JSON.parse(body)
          resolve(res)
        }
        else{
          reject({'error': 'wrong key'})
        }
      }
    )
  })
  return myPromise;

}

myEmitter.send = send
myEmitter.subscribe = subscribe
myEmitter.lastmsg = lastmsg

module.exports.connect = connect

