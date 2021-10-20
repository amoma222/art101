/*
 * Author: Alise Morgan & Stella Brown
 * Created: 20 October 2021
 * License: Public Domain
 */


//Define Variables
 var myTransport = ["car","bus"];

 var myMainRide = {
   color : "Silver",
   make : "Ford",
   model : "Ranger",
   year : 2001,
   age : function() {
     return 2019 - age;
   }

 }

//Output
 document.writeln("Our methods of transportation:" + myTransport + "<br>");

 document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
