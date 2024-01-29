// pages/api/mqttData.js
import mqtt from 'mqtt';

let mqttData = []; // This will store our MQTT messages

// Setting up the MQTT client and subscribing to topics
const client = mqtt.connect('mqtt://localhost:1883'); // Adjust as necessary

client.on('connect', () => {
  client.subscribe('application/+/device/+/event/+', { qos: 2 }); // Adjust topic as necessary
});

client.on('message', (topic, message) => {
  // Store the latest message or append to your data structure
  mqttData = [...mqttData, message.toString()]; // Example: appending to an array
});

export default function handler(req, res) {
  res.status(200).json({ mqttData });
}
