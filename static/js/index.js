//https://www.eclipse.org/paho/clients/js/
var i =1; //VARIABLE PARA CENCENDER LED CON EL MIMSO BOTON

//.............................................................................

/* ENCENDER Y APAGAR LED CON 2 BOTONES
function LED1_On() {
	//alert("led on");
	console.log("led on");
	document.getElementById("sensor").innerHTML="led On";
	message = new Paho.MQTT.Message("ON");
    	message.destinationName = "jeancarlos.arizo@unach.edu.ec/test1";
    	client.send(message);
  
}
function LED1_Off(){	
	//alert("led off");
	console.log("led off");
	document.getElementById("sensor").innerHTML="led Off";
	message = new Paho.MQTT.Message("OFF");
    	message.destinationName = "jeancarlos.arizo@unach.edu.ec/test1";
    	client.send(message);
}
*/

//.............................................................................

/*ENCENDER Y APAGAR LED CON UN OSLO BOTON
function ESTADO_On_Off(){	

   	if (i % 2 == 0)
  	{
		console.log("led on");
		document.getElementById("sensor").innerHTML="led On";
		message = new Paho.MQTT.Message("ON");
   		message.destinationName = "jeancarlos.arizo@unach.edu.ec/test1";
    		client.send(message);

  	}
	else 
	{
		console.log("led off");
		document.getElementById("sensor").innerHTML="led Off";
		message = new Paho.MQTT.Message("OFF");
    		message.destinationName = "jeancarlos.arizo@unach.edu.ec/test1";
    		client.send(message);
	}
	i=i+1;
}
*/

//.............................................................................

// MOSTRAR EL HISTORIAL DE UN SENSOR FISICO CONECTADO AL ESP32
function HISTORIAL_SENSOR(){	
	console.log("led on");
	document.getElementById("sensor").innerHTML=client.historial;
	message = new Paho.MQTT.Message("ON");
   	message.destinationName = "jeancarlos.arizo@unach.edu.ec/test1";
    	client.send(message);
}







// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "jeancarlos.arizo@unach.edu.ec",
    password: "basurero2",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado listo para probar...");
	
    client.subscribe("jeancarlos.arizo@unach.edu.ec/test");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "jeancarlos.arizo@unach.edu.ec/test1";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
	  document.getElementById("sensor").innerHTML=message.payloadString;
  }

function historial(message) {
    console.log("Historial:"+message.payloadString);
	  document.getElementById("sensor").innerHTML=message.payloadString;
  }
  
