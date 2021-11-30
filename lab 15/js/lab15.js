/**
 *
 * Author: Alise Morgan & Stella Brown
 * Created: 18 October 2021
 * License: Public Domain
 *
 **/

var myUrl ="http://numbersapi.com/5/math"

function callAjax() {
   console.log("click");

$.ajax({
  url: myUrl,
  type: "GET",
  })

.done(function(data) {
    console.log("Success:",data);
    $("#output").html(data)
  })

.done(function(request,error){
        console.log(request,error);
  })

};

  $("#activate").click(callAjax);
