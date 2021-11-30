/**
 * Author:    Alise and Stella
 * Created:   11.22.21
 *
 * Public Domain
 **/

//  Create a "FizzBuzz" function.

function FizzBuzzBoom() {

   // Loop through numbers 1 to 200, listing them as you go
   for (var i=0; i<=200; i++) {

// If the number is a multiple of 3, if should print "Fizz!"
     if (i%3 == 0) {
       console.log("Fizz");

// If the number is a multiple of 5, it should print "Buzz!"
    } else if (i%5 == 0) {
        console.log("Buzz");

// If the number is a multiple of 5, it should print "Buzz!"
    } else if (i%7 == 0) {
        console.log("Boom");

// If the number is a multiple of more than one 3, 5 or 7, it should combine Fizz, Buzz, and Boom.
        console.log("FizzBuzz");

    } else {
        console.log(i);
     }
   }
 }


 // Make it so the output of your program appears in your output div.
String +=3 
 $("#output").html(oneLongString);
