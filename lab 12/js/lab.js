/**
 * Author:    Alise and Stella
 * Created:   11.12.2021
 *
 * (c) Public Domain.
 **/

function sortingHat (str) {
  len = str.length;
  mod = len % 4;

  if (mod == 0) {
    return "Pizza";

    }

  else if (mod == 1) {
    return "Cookies";

    }

  else if (mod == 2) {
    return "French Fries";

    }

  else if (mod == 3) {
    return " Donut ";
  }

}

var myButton = document.getElementById("button");
  myButton.addEventListener ("click", function() {
    var name = document.getElementById("input").value;
    var house = sortingHat (name);
    newText = " <p> The Sorting Hat has named you " + house + " </p> ";
    document.getElementById ("output").innerHTML = newText;

})
