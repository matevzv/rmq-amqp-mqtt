var amqp = require('amqp');  
var url  = 'amqp://localhost:5672'

var message = 'Hello world!'

var connection = amqp.createConnection({url: url},  { defaultExchangeName: 'amq.topic' });

connection.on('ready', function () {  
  connection.publish('amqptomqtt', message);

  setTimeout(function(){
    connection.disconnect();
    process.exit();
  }, 500);
});
