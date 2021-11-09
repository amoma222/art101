/**
 * Author: Stella and Alise
 * Created: 11.08.2021
 *
 **/

//Add button to challenge section
  $(“#challenge”).append
  (“<button id=‘c-button’>Button</button>“);
//Add buttton to problem section
  $(“#problem”).append
  (“<button id=‘p-button’>Button</button>“);
//Add button to results section
  $(“#results”).append
  (“<button id=‘r-button’>Button</button>“);


//Add cick event to challenge button
  $("#c-button").click(function(){
    $(this).parent().toggleClass(“special”);
})

//Add click event to problems button
  $("#p-button").click(function(){
    $(this).parent().toggleClass("special");
})

$("#r-button").click(function(){
  $(this).parent().toggleClass(“special”);
})
